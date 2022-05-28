import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/services';
import { AuthService, VerifyEmailResponse } from '@app/services/auth/auth.service';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-verificaction',
  templateUrl: './account-verificaction.component.html',
  styleUrls: ['./account-verificaction.component.scss']
})
export class AccountVerificactionComponent implements OnInit {
  user$ !: Observable<fromUser.UserResponse>
  message !: string;
  constructor(private store: Store<fromRoot.State>,
  private authService: AuthService,
  private notification: NotificationService) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
  }

  onSendEmail(email: string): void {
    const emailRequest = {
      email: email
    }
    this.authService.resendConfirmationEmail(emailRequest).subscribe( data => {
      const dataResponse: VerifyEmailResponse = data;
      console.log(dataResponse);
      if (dataResponse.code === 409 || dataResponse.ok === false || dataResponse.status === 500) {
        this.message = dataResponse.message;
        this.onError(this.message);
      } else {
        this.message = dataResponse.message;
        this.onSuccess(this.message);
      }
    })
  }

  onSuccess(message: string): void {
    this.notification.success(message)
  }

  onError(message: string): void{
    this.notification.error(message)
  }

}
