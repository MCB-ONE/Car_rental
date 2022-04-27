import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
