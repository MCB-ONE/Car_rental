import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Value {
  from: number,
  to: number
}

export interface Placeholder {
  from: string,
  to: string
}

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})

export class DateRangeComponent implements OnInit {

  @Input() placeholder: Placeholder = {
    from: '',
    to: ''
  };

  @Input() color: string = '';

  @Output() changed = new EventEmitter<string>();

  form!: FormGroup;

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: [null],
      to: [null]
    });
  }

  get min(): Date{
    const from = this.form.controls['from'].value;
    return from ? new Date(from) : new Date();
  }

  get max(): Date{
    const to = this.form.controls['to'].value;
    return to ? new Date(to) : new Date();
  }

  private propagateChange: any = () => { }
  private propagateTouched: any = () => { }

  writeValue(value: Value): void {
    this.form.patchValue(value || {});
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    if(isDisabled){
      this.form.disable();
    }else{
      this.form.enable();
    }
  }

  onChanged(): void{
     const value = {  ...this.form.value };
     this.propagateChange(value);
     this.changed.emit(value);
  }

  onClosed(): void{
    this.propagateTouched();

  }
}