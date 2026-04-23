import { Component, Input, Output, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CodeLookupService, MedicalCode } from '../../services/code-lookup.service';

@Component({
  selector: 'app-medical-code-lookup',
  templateUrl: './medical-code-lookup.component.html',
  styleUrls: ['./medical-code-lookup.component.scss'],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MedicalCodeLookupComponent),
      multi: true
    }
  ]
})
export class MedicalCodeLookupComponent implements ControlValueAccessor, OnInit {
  @Input() tabId: string = 'icd';
  @Input() placeholder: string = 'Search code...';
  @Input() isInvalid: boolean = false;
  
  @Output() codeSelected = new EventEmitter<MedicalCode>();

  value: string = '';
  isOpen = false;
  searchResults: MedicalCode[] = [];
  
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private lookupService: CodeLookupService) {}

  ngOnInit() {
    this.searchResults = this.lookupService.lookupCodes(this.tabId, '');
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: any) {
    const query = event.target.value;
    this.value = query;
    this.onChange(query);
    this.searchResults = this.lookupService.lookupCodes(this.tabId, query);
    this.isOpen = this.searchResults.length > 0;
  }

  selectCode(codeObj: MedicalCode) {
    this.value = codeObj.code;
    this.onChange(this.value);
    this.codeSelected.emit(codeObj);
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.searchResults.length === 0) {
      this.searchResults = this.lookupService.lookupCodes(this.tabId, this.value);
    }
  }

  close() {
    setTimeout(() => this.isOpen = false, 200);
  }
}
