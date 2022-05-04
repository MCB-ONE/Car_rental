import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './layout/pages/demo/demo.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';

const routes: Routes = [
  /* ,
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'demo', component: DemoComponent} */
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: "",
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./layout/pages/demo/demo.module').then(m => m.DemoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
