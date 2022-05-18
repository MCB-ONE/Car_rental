import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pagination } from './store/list';
import * as fromList from './store/list';
import * as fromDictionaries from '@app/store/dictionaries';
import * as fromRoot from '@app/store';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.scss']
})
export class FlotaComponent implements OnInit {

  loading$ !: Observable<boolean | null>;
  pagination$ !: Observable<Pagination>;
  dictionaries$ !: Observable<fromDictionaries.Dictionaries>
  params = new HttpParams();

  constructor(
    private store: Store<fromList.ListState>,
    private storeRoot: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.pagination$ = this.store.pipe(select(fromList.getFlota)) as Observable<Pagination>;
    this.dictionaries$ = this.storeRoot.pipe(select(fromDictionaries.getDictionaries)) as Observable<fromDictionaries.Dictionaries>;
    this.params = this.params.set('page', 1);
    this.store.dispatch( new fromList.Read(this.params, this.params.toString()));
  }

}
