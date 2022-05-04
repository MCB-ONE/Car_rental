import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  public url1: string = "";

  constructor(private location: Location) {

  }

  ngOnInit(){
    this.url1 = this.location.path();
    console.log(this.url1);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
