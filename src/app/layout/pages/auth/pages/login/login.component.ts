import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markFormGroupTouched, regex, regexErrors } from '@app/shared';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  regexErrors = regexErrors;
  loading$!: Observable<boolean | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));

    this.form = this.fb.group({
      username: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.maxLength(128)
        ]
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(regex.password)
        ]
      }]
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const value = this.form.value;
      const credentials: fromUser.EmailPasswordCredentials = {
        username: value.username,
        password: value.password
      }
      console.log(credentials);
      this.store.dispatch(new fromUser.SignInEmail(credentials));
    }
    else {
      markFormGroupTouched(this.form);
    }
  }
}
