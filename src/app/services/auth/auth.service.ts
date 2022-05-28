import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserRequest } from "@app/store/user";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { NotificationService } from "../notification/notification.service";

export interface VerifyEmailResponse {
  message: string;
  class?: string;
  code?: number;
  ok?: boolean;
  status?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(
    private httpClient: HttpClient
  ) { }

  resendConfirmationEmail(email: object):Observable<VerifyEmailResponse>{
    const data = this.httpClient.post<VerifyEmailResponse>(`${environment.url}users/resend_activation_email`, email);
    return data;
  }

  accountActivation(params: any):Observable<UserRequest>{
    const body = { token: params.token };
    const data = this.httpClient.put<UserRequest>(`${environment.url}users/${params.id}/activate`, body);
    return data;
  }

}
