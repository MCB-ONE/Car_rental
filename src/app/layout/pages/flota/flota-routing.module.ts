import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlotaComponent } from './flota.component';

const routes: Routes = [
  {
    path: '',
    component: FlotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlotaRoutingModule { }
