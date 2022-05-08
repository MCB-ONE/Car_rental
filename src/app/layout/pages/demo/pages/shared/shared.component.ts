import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';
import { NotificationService } from '@app/services';
import {regex, regexErrors, markFormGroupTouched} from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  regexErrors = regexErrors;
  items!: ControlItem[];
  showSpinner: boolean = false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.items = [
      {value: 1, label: "Uno"},
      {value: 2, label: "Dos"},
      {value: 3, label: "Tres"},
      {value: 4, label: "Cuatro"}
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
        input: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.number)
          ]
        }],
        email: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.pattern(regex.email)
          ]
        }],
        password: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required
          ]
        }],
        select: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        checkboxes: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        radios: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        date: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        dateRange: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        autocomplete: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required
          ]
        }]
    })
  }

  onPatchValue(): void {
      this.form.patchValue({
        input: 'Toni Salvadó',
        email: 'ejemplo_email@gmai.com',
        password: 'toni1234',
        select: 3,
        autocomplete: 2,
        checkboxes: [4,2],
        radios: 3,
        date: new Date().getTime(),
        dateRange: {
          from: new Date().getTime(),
          to: new Date().getTime()+(48 * 60) * 60000,
        }

      }
      )
  }

  onSubmit() : void {
    console.log('Formulario enviado!')

    if(!this.form.valid){
      markFormGroupTouched(this.form);
    }
  }


  onToggleDisable(): void{
    if(this.form.enabled){
      this.form.disable()
    }else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void{
    this.showSpinner = !this.showSpinner;
  }

  onSuccess(): void {
    this.notification.success('Proceso finalizado con exito.')
  }

  onError(): void{
    this.notification.error('Error al finalizar el proceso.')
  }
}
