import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
