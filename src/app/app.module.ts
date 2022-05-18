import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SidenavListComponent } from './layout/navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegistroComponent } from './layout/pages/registro/registro.component';
import { MatDateFormats, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NotificationModule } from './services';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { effects, reducers } from './store';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    MatNativeDateModule,
    NotificationModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
      }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
