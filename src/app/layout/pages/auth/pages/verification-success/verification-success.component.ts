import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '@app/services';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-verification-success',
  templateUrl: './verification-success.component.html',
  styleUrls: ['./verification-success.component.scss']
})
export class VerificationSuccessComponent implements OnInit {

  message!: string;
  accountActivated: boolean = false;
  urlParams: any = {};

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private notification: NotificationService) {}

  ngOnInit(): void {
    this.urlParams.token = this.route.snapshot.queryParamMap.get('token');
    this.urlParams.id = this.route.snapshot.queryParamMap.get('uid');
    this.accountActivation();
  }

  accountActivation() {
    this.authService.accountActivation(this.urlParams).subscribe(
      data => {
        console.log(data);
        this.onSuccess('Su cuenta ha sido activada');
        this.accountActivated = true;
      },
      (error) => {
        console.log(error);
        this.message = error.error.message;
        this.onError(error.error.message);
        this.accountActivated = false;
      }
    );
  }

  onSuccess(message: string): void {
    this.notification.success(message)
  }

  onError(message: string): void{
    this.notification.error(message)
  }


}
