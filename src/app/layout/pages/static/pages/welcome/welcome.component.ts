import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from '@app/store/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  products!: any[];

  constructor(private store: Store<fromUser.UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromUser.Init);
  }

}
