import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlEntities } from '@app/shared/utils/form';
import { Dictionaries } from '@app/store/dictionaries';
import { ControlItem } from '@app/models/frontend';
import { HttpParams } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromList from '../../store/list';
import * as fromRoot from '@app/store';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  @Input() dictionaries !: Dictionaries | null;
  form!: FormGroup;
  controls!: ControlEntities;
  items!: ControlItem[];
  categorias!: ControlItem[];
  marca!: ControlItem[];
  paginatorParams!: HttpParams;
  private destroy = new Subject<any>();


  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.store.pipe(takeUntil(this.destroy))
      .pipe(select(fromList.getPaginationRequest))
      .subscribe((data:any )=> {
        this.paginatorParams = data;
      })
    this.categorias = this.dictionaries?.categories.controlItems as ControlItem[];
    this.marca = this.dictionaries?.maker.controlItems as ControlItem[];

    this.items = [
      {value: 'updatedAt=asc', label: 'Novedades'},
      {value: 'pricePerDay=asc', label: 'Precio menor a mayor'},
      {value: 'pricePerDay=desc', label: 'Precio mayor a menor'},
    ]

    this.form = this.fb.group({
      sort: [null, {
        updateOn: 'change',
        validators:[]
      }],
      categoria: null,
      marca: null
    })
    this.controls = {
      sort: {
        items: this.items,
        changed: () => {
          const filter = this.form.value.sort.split('=');
          /* this.paginatorParams = this.paginatorParams.delete('page'); */
          this.paginatorParams = this.paginatorParams.delete('order[updatedAt]');
          this.paginatorParams = this.paginatorParams.delete('order[pricePerDay]');
          this.paginatorParams = this.paginatorParams.set(`order[${filter[0]}]`, filter[1]);
          this.paginatorParams = this.paginatorParams.set('page', 1);
          this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()));
        }
      }
    }
  }

  /*Capturar eventos de filtro marca y categoria */
  onCategoriaSelectionChange(ob: MatSelectionListChange) {
    this.paginatorParams = this.paginatorParams.delete('category');
    this.paginatorParams = this.paginatorParams.set('category', this.form.get('categoria')?.value);
    this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()));

    console.log(this.form.get('categoria')?.value);
  }

    /*Capturar eventos de filtro marca y categoria */
    onMarcaSelectionChange(ob: MatSelectionListChange) {
      this.paginatorParams = this.paginatorParams.delete('maker');
      this.paginatorParams = this.paginatorParams.set('maker', this.form.get('marca')?.value[0]);
      this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()));

      console.log(this.form.get('marca')?.value);
    }

    ngOnDestroy(): void {
        this.destroy.next(null);
        this.destroy.complete();
    }


}
