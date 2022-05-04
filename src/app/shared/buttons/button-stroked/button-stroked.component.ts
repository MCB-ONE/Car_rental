import { Component, OnInit, Input } from '@angular/core';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button-stroked',
  templateUrl: './button-stroked.component.html',
  styleUrls: ['./button-stroked.component.scss']
})
export class ButtonStrokedComponent implements OnInit {

  @Input() type: ButtonType;
  @Input() color: string;
  constructor() {
    this.type = 'button';
    this.color = 'primary';
  }

  ngOnInit(): void {
  }

}
