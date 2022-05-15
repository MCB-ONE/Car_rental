import { Location } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NavigationComponent implements OnInit {

  nav_variable = true;

  @Output() public sidenavToggle = new EventEmitter();

  public url1: string = "";

  constructor(private location: Location) {

  }

  ngOnInit() {
    this.url1 = this.location.path();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public onWindowScroll(event: Event){
    console.log(event);
  }
}
