import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';
import {regex, regexErrors} from '@app/shared/utils';

@Component({
  selector: 'app-shared-dark',
  templateUrl: './shared-dark.component.html',
  styleUrls: ['./shared-dark.component.scss']
})
export class SharedDarkComponent implements OnInit {
  form!: FormGroup;
  regexErrors = regexErrors;
  items!: ControlItem[];

  constructor(private fb: FormBuilder) {
    this.items = [
      {value: 0, label: "Zero"},
      {value: 1, label: "Uno"},
      {value: 2, label: "Dos"},
      {value: 3, label: "Tres"}
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
        inputDark: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
          ]
        }],
        selectDark: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        checkboxesDark: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        radiosDark: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        dateDark: [null, {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }],
        autocompleteDark: [null, {
          updateOn: 'blur',
          validators: [
            Validators.required
          ]
        }]

    })
  }

  onPatchValue(): void {
      this.form.patchValue({input: 'Toni Salvadó'})
  }

  onSubmit(): void{
    console.log('Botón submit pulsado');
  }

}
