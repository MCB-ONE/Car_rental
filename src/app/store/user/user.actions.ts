import { Action } from "@ngrx/store";
import { EmailPasswordCredentials, UserCreateRequest, UserResponse } from "./user.models";


export enum Types {
  /* INIT: Operaciones para comprobar si el usuario se encuentra en sesión Cada vez que refresque la página. En caso true comenzar la búsqueda de su sesion en el backend, devolver datos al cliente y mostrar los datos en pantalla */
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGN_IN_EMAIL = '[User] Login: Start',
  SIGN_IN_EMAIL_SUCCESS = '[User] Login: Success',
  SIGN_IN_EMAIL_ERROR = '[User] Login: Error',

  SIGN_UP_EMAIL = '[User] Sign up con email: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Sign up con email: Success',
  SIGN_UP_EMAIL_ERROR = '[User] Sign up con email: Error',

  LOG_OUT_EMAIL = '[User] Logout: Start',
  LOG_OUT_EMAIL_SUCCESS = '[User] Logout: Success',
  LOG_OUT_EMAIL_ERROR = '[User] Logout: Error',

}

//Type Actions
// INIT

export class Init implements Action {
  readonly type = Types.INIT;
  constructor(){};
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;
  constructor(public id: string, public user: UserResponse | null){};
}

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;
  constructor(){};
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;
  constructor(public error: string){};
}

// SIGNIN

export class SignInEmail implements Action {
  readonly type = Types.SIGN_IN_EMAIL;
  constructor(public credentials: EmailPasswordCredentials){};
}

export class SignInEmailSuccess implements Action {
  readonly type = Types.SIGN_IN_EMAIL_SUCCESS;
  constructor(public id: string, public user: UserResponse | null){};
}

export class SignInEmailError implements Action {
  readonly type = Types.SIGN_IN_EMAIL_ERROR;
  constructor(public error: string){};
}

// SIGNUP

export class SignUpEmail implements Action {
  readonly type = Types.SIGN_UP_EMAIL;
  constructor(public user: UserCreateRequest){};
}

export class SignUpEmailSuccess  implements Action {
  readonly type = Types.SIGN_UP_EMAIL_SUCCESS;
  constructor(public id: string, public user: UserResponse | null){}
}

export class SignUpEmailError implements Action {
  readonly type = Types.SIGN_UP_EMAIL_ERROR;
  constructor(public error: string){};
}

//LOGOUT
export class Logout implements Action {
  readonly type = Types.LOG_OUT_EMAIL;
  constructor(){};
}

export class LogoutSuccess implements Action {
  readonly type = Types.LOG_OUT_EMAIL_SUCCESS;
  constructor(){};
}

export class LogoutError implements Action {
  readonly type = Types.LOG_OUT_EMAIL_ERROR;
  constructor(public error: string){};
}

export type All =
  Init
  | InitAuthorized
  | InitAuthorized
  | InitUnauthorized
  | InitError
  | SignInEmail
  | SignInEmailSuccess
  | SignInEmailError
  | SignUpEmail
  | SignUpEmailSuccess
  | SignUpEmailError
  | Logout
  | LogoutSuccess
  | LogoutError

