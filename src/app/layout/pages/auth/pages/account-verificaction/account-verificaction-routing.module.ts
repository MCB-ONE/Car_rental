import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountVerificactionComponent } from './account-verificaction.component';

const routes: Routes = [
  {
    path: '',
    component: AccountVerificactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountVerificactionRoutingModule { }
