import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UserResponse } from '@app/store/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NavigationComponent implements OnInit {

  @Input() isAuth !: boolean | null;
  @Input() user !: UserResponse | null;
  @Output() public sidenavToggle = new EventEmitter<void>();
  @Output() public logout = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit() {

  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public onWindowScroll(event: Event){
    console.log(event);
  }

  OnLogout():void {
    this.logout.emit();
  }


}
