import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDarkRoutingModule } from './shared-dark-routing.module';
import { ButtonsModule, ControlsModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedDarkComponent } from './shared-dark.component';


@NgModule({
  declarations: [
    SharedDarkComponent
  ],
  imports: [
    CommonModule,
    SharedDarkRoutingModule,
    ButtonsModule,
    ControlsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedDarkModule { }
