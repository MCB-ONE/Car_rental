import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDarkComponent } from './shared-dark.component';

const routes: Routes = [
  {
    path: '',
    component: SharedDarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedDarkRoutingModule { }
