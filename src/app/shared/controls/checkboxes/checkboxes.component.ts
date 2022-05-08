import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {

  @Input() items!: ControlItem[];
  @Input() color: string = '';
  @Output() changed = new EventEmitter<Value[]>();

  value!: Value[];
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  private propagateChange: any = () => { }
  private propagateTouched: any = () => { }

  writeValue(value: Value[]): void {
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

  /* onKeyup(event: Event): void{
    const { target } = event;
    this.value[] = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  } */

  onBlur(): void {
    this.propagateTouched();
  }

  onChanged(value: Value, checked: Event): void {
    const { target } = checked;
    const resultado = (target as HTMLInputElement).checked;

    const selected = this.getSelected(value, resultado);
    this.value = selected;
    this.propagateChange(selected);
    this.changed.emit(selected);

  }

  isChecked(value: Value): boolean {
    return this.value && this.value.includes(value);
  }

  private getSelected(value: Value, checked: boolean): Value[] {
    const selected: Value[] = this.value ? [...this.value] : [];
    if(checked){
      if(!selected.includes(value)){
        selected.push(value);
      }
    }else{
      const index = selected.indexOf(value);
      selected.splice(index, 1);
    }
    return selected.length ? selected : [];
  }

}
