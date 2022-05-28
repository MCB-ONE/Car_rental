import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from '@app/store/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  user$ !: Observable<fromUser.UserResponse>
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
    this.store.dispatch(new fromDictionaries.Read());
  }

}
