import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from '@app/shared';
import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
