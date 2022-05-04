import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { AngularMaterialModule } from '@app/angular-material.module';
import { CarCardComponent } from './car-card/car-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ExpansionComponent } from './expansion/expansion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
/* import { DialogComponent } from './dialog/dialog.component'; */
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [
    HeroComponent,
    NewsLetterComponent,
    CarCardComponent,
    CarouselComponent,
    ExpansionComponent,
    LoginFormComponent,
    /* DialogComponent, */
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexModule
  ],
  exports:[
      HeroComponent,
      NewsLetterComponent,
      CarCardComponent,
      CarouselComponent,
      ExpansionComponent,
      LoginFormComponent,
      /* DialogComponent, */
  ]
})
export class SharedModule { }
