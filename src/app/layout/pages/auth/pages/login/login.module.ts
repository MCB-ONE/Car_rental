import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputModule, PasswordModule } from '@app/shared/controls';
import { ButtonsModule } from '@app/shared/buttons';
import { SpinnerModule } from '@app/shared/indicators';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    ButtonsModule,
    SpinnerModule,
    FlexLayoutModule
  ]
})
export class LoginModule { }
