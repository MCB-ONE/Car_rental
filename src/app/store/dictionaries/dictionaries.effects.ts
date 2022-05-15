import { HttpClient } from "@angular/common/http";
import * as fromActions from './dictionaries.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap, zip } from "rxjs";
import { environment } from "environments/environment";
import { Item, Dictionaries, Dictionary, ControlItem } from "./dictionaries.models";
import { HydraMember } from "@app/core/hydraMember";



type Action = fromActions.All;

interface ModelItem {
  '@id': string;
  '@type': string;
  'hydra:member': Array<HydraMember>;
  id: "string";
  name: "string";
}

const getItems = (x: ModelItem): Array<any> => {
  return x['hydra:member'];
}

const itemControlItem = (x: Item): ControlItem => ({
  value: x.id,
  label: x.name,
  icon: x.icon
})

const addDictionary = (items: Item[]): Dictionary => ({
  items,
  controlItems: [...items].map((x) => itemControlItem(x))

})

@Injectable()
export class DicitionariesEffects {

  constructor(
    private actions: Actions,
    private httpClient: HttpClient
  ) { }

  read: Observable<Action> = createEffect(() =>
  this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap(() => {
      return zip(
        this.httpClient.get<ModelItem>(`${environment.url}makers`)
          .pipe(
            map((item) => getItems(item))
          ),
        this.httpClient.get<ModelItem>(`${environment.url}categories`)
          .pipe(
            map((item) => getItems(item))
          )
      ).pipe(
        map(([categories, maker]) => {
          const dictionaries: Dictionaries = {
            categories: addDictionary(categories),
            maker: addDictionary(maker)
          };
          return new fromActions.ReadSuccess(dictionaries);
        }),
        catchError(err => of(new fromActions.ReadError(err.message)))
      )
    })
  )
);

}
