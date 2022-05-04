import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonStrokedComponent } from './button-stroked.component';


@NgModule({
  declarations: [
    ButtonStrokedComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    ButtonStrokedComponent
  ]
})
export class ButtonStrokedModule { }
