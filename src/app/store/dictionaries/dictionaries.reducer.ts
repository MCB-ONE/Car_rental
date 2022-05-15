import * as fromActions from './dictionaries.actions';
import { Dictionaries } from './dictionaries.models';


export interface DictionariesState {
  entities: Dictionaries | null;
  loading: boolean | null;
  error: string | null;
}

export const initialSatate: DictionariesState = {
  entities: null,
  loading: null,
  error: null
}

export function reducer(state: DictionariesState = initialSatate, action: fromActions.All | any): DictionariesState {
  switch (action.type) {
    case fromActions.Types.READ: {

      return { ...state, loading: true, error: null, entities: null };
    }
    case fromActions.Types.READ_SUCCESS: {
      return { ...state, loading: false, error: null, entities: action.dictionaries };
    }
    case fromActions.Types.READ_ERROR: {
      return { ...state, loading: false, error: action.error ,entities: null };
    }
    default: {
      return state;
    }
  }
}
