import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlotaRoutingModule } from './flota-routing.module';
import { FlotaComponent } from './flota.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { ModelComponent } from './components/model/model.component';
import { ModelsComponent } from './components/models/models.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from '@app/shared/buttons';
import { FormFieldModule } from '@app/shared/controls';
import { SelectModule  } from '@app/shared/controls';
import { SpinnerModule } from '@app/shared/indicators';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    FlotaComponent,
    FilterComponent,
    PaginatorComponent,
    SearchComponent,
    ModelComponent,
    ModelsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlotaRoutingModule,
    StoreModule.forFeature('flota', reducers),
    EffectsModule.forFeature(effects),
    FormFieldModule,
    ButtonModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    SelectModule,
    MatPaginatorModule
  ]
})
export class FlotaModule { }
