import { HttpParams } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { HydraView, Pagination } from '../../store/list';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/list';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy {
  @Input() pagination!: Pagination;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  paginatorParams!: HttpParams;
  private destroy =  new Subject<any>();

  pageCount = 0; //cantidad elementos
  pageSize = 9; //elementos a mostrar
  pageCombo = [3, 6, 9, 12];
  /* sort = "nombreAsc"; */

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.pipe(takeUntil(this.destroy)).pipe(select(fromList.getPaginationRequest))
    .subscribe((data:any)=>{
      this.paginatorParams = data;
    })
    console.log(this.paginatorParams);

    this.store.pipe(takeUntil(this.destroy)).pipe(select(fromList.getFlota))
    .subscribe((data:any)=>{
      this.pageSize = this.pageSize;
      this.pageCount = data['hydra:totalItems'];

      if(this.matPaginator){
        console.log(data['hydra:view']['hydra:first'])
        this.matPaginator.pageIndex = data['hydra:view']['hydra:first'] + 1;
      }
    })
  }

  eventPaginator(event: PageEvent): void {

    let page = event.pageIndex + 1;
    let size = event.pageSize;



    /* this.paginatorParams = this.paginatorParams.delete('itemsPerPage');
    this.paginatorParams = this.paginatorParams.delete('page'); */
    this.paginatorParams = this.paginatorParams.set('page', page);
    this.paginatorParams = this.paginatorParams.set('itemsPerPage', size);
    this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()))
  }

  ngOnDestroy(): void {
      this.destroy.next(null);
      this.destroy.complete();
  }

}
