import { HttpParams } from "@angular/common/http";
import { Pagination } from "./list.models";
import * as fromActions from './list.actions';



export interface ListState {
  pagination: Pagination | null;
  requestPagination: HttpParams | null;
  loading: boolean | null;
  error: string | null;
}


export const initialSatate: ListState = {
  pagination: null,
  requestPagination: null,
  loading: null,
  error: null
}

export function reducer(state: ListState = initialSatate, action: fromActions.All | any) {
  switch (action.type) {
    case fromActions.Types.READ: {
      return { ...state, loading: true, error: null, requestPagination: action.paginationRequest };
    }
    case fromActions.Types.READ_SUCCESS: {
      console.log(state);
      return { ...state, loading: false, error: null, pagination: action.pagination };
    }
    case fromActions.Types.READ_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
}
