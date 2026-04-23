import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TabFieldConfig } from '../../../models/tab-config.model';
import { MedicalCode } from '../../../services/code-lookup.service';

@Component({
  selector: 'app-coding-entry-row',
  templateUrl: './coding-entry-row.component.html',
  styleUrls: ['./coding-entry-row.component.scss'],
  standalone: false
})
export class CodingEntryRowComponent {
  @Input() entry: any;
  @Input() config: TabFieldConfig[] = [];
  @Input() tabId: string = 'icd';
  @Input() isFullscreen = false;

  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  isEditing = false;
  editedEntry: any = {};

  startEdit() {
    this.isEditing = true;
    this.editedEntry = { ...this.entry };
    this.edit.emit();
  }

  save() {
    this.update.emit(this.editedEntry);
    this.isEditing = false;
  }

  onCancel() {
    this.isEditing = false;
    this.cancel.emit();
  }

  onCodeSelected(code: MedicalCode) {
    this.editedEntry['desc'] = code.description;
    if (code.hcc) this.editedEntry['hcc'] = code.hcc;
    if (code.raf) this.editedEntry['raf'] = code.raf;
  }
}
