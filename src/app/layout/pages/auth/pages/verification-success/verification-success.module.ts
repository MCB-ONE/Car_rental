import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationSuccessRoutingModule } from './verification-success-routing.module';
import { VerificationSuccessComponent } from './verification-success.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonsModule } from '@app/shared';


@NgModule({
  declarations: [
    VerificationSuccessComponent
  ],
  imports: [
    CommonModule,
    VerificationSuccessRoutingModule,
    MatCardModule,
    MatDividerModule,
    ButtonsModule
  ]
})
export class VerificationSuccessModule { }
