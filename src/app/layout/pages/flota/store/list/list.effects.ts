import { HttpClient, HttpParams } from "@angular/common/http";
import { Pagination } from "./list.models";
import * as fromActions from './list.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, Observable, of, switchMap } from "rxjs";
import { environment } from "environments/environment";



type Action = fromActions.All;

@Injectable()
export class ListEffects {
  constructor(
    private actions: Actions,
    private httpClient: HttpClient
  ) { }

  read: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      map((action: fromActions.Read) => action.paramsUrl),
      switchMap((request: string) =>
        this.httpClient.get<Pagination>(`${environment.url}models?${request}`)
          .pipe(
            delay(1000),
            map((pagination: any) => new fromActions.ReadSuccess(pagination)),
            catchError(err => of(new fromActions.ReadError(err.message)))
          )
      )
    )
  );


}
