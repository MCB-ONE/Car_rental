import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from '@app/store/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  user$ !: Observable<fromUser.UserResponse>;
  isAuth$ !: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
    this.isAuth$ = this.store.pipe(select(fromUser.getIsAuthorized)) as Observable<boolean>;
    this.store.dispatch(new fromDictionaries.Read());
    this.store.dispatch(new fromUser.Init);
  }

  onLogout(): void {
    localStorage.removeItem('user');
    this.store.dispatch(new fromUser.Logout());
    this.router.navigate(['/auth/login'])
  }

}
