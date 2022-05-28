import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountVerificactionRoutingModule } from './account-verificaction-routing.module';
import { AccountVerificactionComponent } from './account-verificaction.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonsModule } from '@app/shared';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AccountVerificactionComponent
  ],
  imports: [
    CommonModule,
    AccountVerificactionRoutingModule,
    ButtonsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class AccountVerificactionModule { }
