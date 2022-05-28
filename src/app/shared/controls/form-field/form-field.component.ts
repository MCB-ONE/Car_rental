import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})

export class FormFieldComponent implements OnInit {
  @Input() color: string = '';
  @Input() label: string = 'Nombre del campo';
  @Input() isRequired: boolean = false;
  @Input() control!: AbstractControl;
  @Input() patternError!: string;

  constructor() { }

  ngOnInit(): void {
  }

  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorKey() {
    /* if(this.control && this.control.errors && Object.keys(this.control.errors)){
      console.log(Object.keys(this.control.errors)[0]);
    } */

    return this.control && this.control.errors && Object.keys(this.control.errors)[0];
  }

}
