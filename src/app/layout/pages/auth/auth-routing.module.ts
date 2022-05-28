import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'account_verification',
    loadChildren: () => import('./pages/account-verificaction/account-verificaction.module').then(m=>m.AccountVerificactionModule)
  },
  {
    path: 'verification_success',
    loadChildren: () => import('./pages/verification-success/verification-success.module').then(m=>m.VerificationSuccessModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/registration/registration.module').then(m=>m.RegistrationModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
