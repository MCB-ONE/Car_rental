import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './layout/pages/demo/demo.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: 'flota',
        loadChildren: () => import('./layout/pages/flota/flota.module').then(m => m.FlotaModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./layout/pages/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'static',
        loadChildren: () => import('./layout/pages/static/static.module').then(m => m.StaticModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'static/welcome'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/404'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
