import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "@app/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { environment } from "@src/environments/environment";
import { Observable, of, catchError, switchMap, tap, map } from "rxjs";
import * as fromActions from './user.actions';
import { UserResponse } from "./user.models";
import { JwtHelperService } from "@auth0/angular-jwt";

type Action = fromActions.All;

@Injectable()
export class UserEffects {

  constructor(
    private actions: Actions,
    private router: Router,
    private httpClient: HttpClient,
    private notification: NotificationService,
    private jwt_decode: JwtHelperService
  ) { }

  signUpEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP_EMAIL),
      map((action: fromActions.SignUpEmail) => action.user),
      switchMap(userData =>
        this.httpClient.post<UserResponse>(`${environment.url}users/register`, userData)
          .pipe(
            tap((response: UserResponse) => {
              console.log(JSON.stringify(response));
              const localUserData = { 'email': response.email, 'id': response.id }
              localStorage.setItem('user', JSON.stringify(localUserData));
              console.log(JSON.stringify(localUserData));
              this.router.navigate(['/auth/account_verification']);
            }),
            map((response: UserResponse) => new fromActions.SignUpEmailSuccess(response.id, response || null)),
            //catchError(err => of(new fromActions.SignUpEmailError(err.message)))
            catchError(err => {
              this.notification.error("Errores al registrar nuevo usuario");
              return of(new fromActions.SignUpEmailError(err.message))

            })
          )
      )
    )
  );

  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap(credentials =>
        this.httpClient.post<UserResponse>(`${environment.url}users/login_check`, credentials)
          .pipe(
            tap((response: UserResponse) => {
              const tokenData = this.jwt_decode.decodeToken(response.token);
              const localUserData = { 'token': response.token, 'id': tokenData.id }
              localStorage.setItem('user', JSON.stringify(localUserData));

            }),
            map((response: UserResponse) => new fromActions.SignInEmailSuccess(response.id, response || null)),
            //catchError(err => of(new fromActions.SignInEmailError(err.message)))
            catchError(err => {
              this.notification.error("Credenciales incorrectas");
              return of(new fromActions.SignInEmailError(err.message))
            })
          )
      ),
    )
  );

  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(async () => localStorage.getItem('user')),
      switchMap(user => {
        if (user) {
          console.log(JSON.parse(user));
          return this.httpClient.get<UserResponse>(`${environment.url}/users/${JSON.parse(user).id}`)
            .pipe(
              tap((user: UserResponse) => {
                console.log('data del usuario en sesion que viene del servidor=>', user);
              }),
              map((user: UserResponse) => new fromActions.InitAuthorized(user.id, user || null)),
              catchError(err => of(new fromActions.InitError(err.message)))
            )
        } else {
          return of(new fromActions.InitUnauthorized());
        }
      }
      )
    )
  );
}
