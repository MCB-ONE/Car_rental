import { UserResponse } from "./user.models";
import * as fromActions from './user.actions';

export interface UserState {
  entity: UserResponse | null;
  id: string | null;
  loading: boolean | null;
  error: string | null;
}

export const initialSatate: UserState = {
  entity: null,
  id: null,
  loading: null,
  error: null,
}

export function reducer(state: UserState = initialSatate, action: fromActions.All | any) {
  switch (action.type) {
    // init
    case fromActions.Types.INIT: {
      return { ...state, loading: true };
    }
    case fromActions.Types.INIT_AUTHORIZED: {
      console.log(state);
      return { ...state, loading: false, error: null, entity: action.user, id: action.id };
    }
    case fromActions.Types.INIT_UNAUTHORIZED: {
      return { ...state, loading: false, error: action.error, entity: null, id: null };
    }

    case fromActions.Types.INIT_ERROR: {
      return { ...state, loading: false, error: action.error, entity: null, id: null };
    }

    //Login

    case fromActions.Types.SIGN_IN_EMAIL: {
      return { ...state, loading: true, error: null, entity: null, id: null };
    }

    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return { ...state, loading: false, error: null, entity: action.user, id: action.id };
    }

    case fromActions.Types.SIGN_IN_EMAIL_ERROR: {
      return { ...state, loading: false, error: action.error, entity: null, id: null };
    }

    //Singup
    case fromActions.Types.SIGN_UP_EMAIL: {
      return { ...state, loading: true, error: null, entity: null, id: null };
    }

    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS: {
      return { ...state, loading: false, error: null, entity: action.user, id: action.id };
    }

    case fromActions.Types.SIGN_UP_EMAIL_ERROR: {
      return { ...state, loading: false, error: action.error, entity: null, id: null };
    }

    //LOGOUT o Salir de Sesion
    case fromActions.Types.LOG_OUT_EMAIL: {
      return { ...initialSatate };
    }

    case fromActions.Types.LOG_OUT_EMAIL_SUCCESS: {
      return { ...initialSatate };
    }

    case fromActions.Types.LOG_OUT_EMAIL_ERROR: {
      return { ...state, loading: false, entity: null, id: null, error: action.error };
    }

    default: {
      return state;
    }
  }
}
