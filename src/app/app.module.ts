import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SidenavListComponent } from './layout/navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegistroComponent } from './layout/pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    SidenavListComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    /* Core */
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
