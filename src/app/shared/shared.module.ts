import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { AngularMaterialModule } from '@app/angular-material.module';
import { CarCardComponent } from './car-card/car-card.component';



@NgModule({
  declarations: [
    HeroComponent,
    NewsLetterComponent,
    CarCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    HeroComponent,
    CarCardComponent
  ]
})
export class SharedModule { }
