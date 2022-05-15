import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() items!: ControlItem[];
  @Input() placeholder: string = '';
  @Input() color: string = '';

  @Output() changed = new EventEmitter<Value>();

  value!: Value;
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => { }
  private propagateTouched: any = () => { }

  writeValue(value: Value): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange(event: MatSelectChange): void {
    const value = event.value ? event.value : null;
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onBlur(): void {
    this.propagateTouched();
  }

}