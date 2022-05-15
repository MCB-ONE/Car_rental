import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ListEffects } from './list/list.effects';
import * as fromList from './list/list.reducers';


export interface FlotaState {
  list: fromList.ListState
}

export const reducers: ActionReducerMap<FlotaState> = {
  list: fromList.reducer
}

export const effects: any[] = [
  ListEffects
]

export const getFlotaSatate = createFeatureSelector<FlotaState>('flota');
