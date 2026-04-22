import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-opp-lookup',
  templateUrl: './opp-lookup.component.html',
  styleUrls: ['./opp-lookup.component.scss'],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OppLookupComponent),
      multi: true
    }
  ]
})
export class OppLookupComponent implements ControlValueAccessor {
  @Input() placeholder = 'Select Opportunity Type...';
  
  value: string = '';
  isOpen = false;
  searchText = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  options = [
    { category: 'Clinical Documentation', items: ['Specificity improvement', 'Clinical evidence missing', 'Clarification needed'] },
    { category: 'Risk Adjustment', items: ['Existing', 'New', 'Re-capture', 'Incorrectly Coded'] },
    { category: 'Quality / HEDIS', items: ['Preventative care gap', 'Lab result needed', 'Screening overdue'] }
  ];

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.searchText = '';
  }

  select(item: string) {
    this.value = item;
    this.onChange(item);
    this.isOpen = false;
  }
}
