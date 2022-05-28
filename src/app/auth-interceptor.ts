import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userStoreData = localStorage.getItem('user');
    let request: HttpRequest<any> = req.clone();
    if (userStoreData) {
      const securityToken = JSON.parse(userStoreData).token;
      request = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + securityToken)
      })
    } else {
      console.log('Error en el interceptor')
    }

    return next.handle(request)

  }
}
