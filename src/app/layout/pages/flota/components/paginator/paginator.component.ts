import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { HydraView } from '../../store/list';
/* import * as fromRoot from '@app/store'; */

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() pagination!: HydraView;
  @ViewChild(MatPaginator) matPAginator!: MatPaginator;
  paginatorParams!: HttpParams;
  private destroy =  new Subject<any>();

  pageCount = 0;
  pageSize = 10;
  pageCombo = [1, 2, 6, 12];
  sort = "nombreAsc";

  constructor(/* private store: Store<fromRoot.State> */) { }

  ngOnInit(): void {
  }

}
