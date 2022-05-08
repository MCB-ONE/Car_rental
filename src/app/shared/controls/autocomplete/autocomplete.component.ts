import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil, distinctUntilChanged, startWith, map, filter } from 'rxjs/operators';
import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {


  @Input() items!: ControlItem[];
  @Input() placeholder: string = '';
  @Input() color: string = '';

  @Output() changed = new EventEmitter<Value>();

  isDisabled: boolean = false;

  formControl = new FormControl();

  options$!: Observable<ControlItem[]>

  private destroy = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this.options$ = this.formControl.valueChanges.pipe(
      startWith(''),
      filter(value => typeof value ==='string' || typeof value === 'object' ),
      map(value => typeof value === 'string' ? value : value.label),
      map(label => label ? this.filter(label) : this.items.slice())
    )
    this.formControl.valueChanges.pipe(
      takeUntil(this.destroy),
      distinctUntilChanged()
    ).subscribe(item => {
      const value = typeof item === 'object' ? item.value : null;
      this.propagateChange(value);
      this.changed.emit(value);
    })
  }

  ngOnDestroy(): void {
      this.destroy.next(null);
      this.destroy.complete();
  }

  private filter (value: string): ControlItem[] {
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.label.toLowerCase().includes(filterValue));
  }

  private propagateChange: any = () => { }
  private propagateTouched: any = () => { }

  writeValue(value: Value): void {
    const selectedOption = this.items.find(item => item.value === value);
    this.formControl.setValue(selectedOption);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled){
      this.formControl.disable();
    }else{
      this.formControl.enable();
    }
  }

  displayFn(item?: ControlItem): string   {
    return item ? item?.label : ' ';
  }

  onBlur(): void{
    this.propagateTouched();
  }

}
