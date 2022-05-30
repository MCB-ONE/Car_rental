import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserResponse } from '@app/store/user';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Input() isAuth !: boolean | null;
  @Input() user !: UserResponse | null;
  @Output() sidenavClose = new EventEmitter();
  @Output() public logout = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  OnLogout():void {
    this.logout.emit();
    this.onSidenavClose();
  }
}

