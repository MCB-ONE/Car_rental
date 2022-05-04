import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { ButtonStrokedModule } from './button-stroked/button-stroked.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonStrokedModule
  ],
  exports:[
    ButtonModule,
    ButtonStrokedModule
  ]
})
export class ButtonsModule { }
