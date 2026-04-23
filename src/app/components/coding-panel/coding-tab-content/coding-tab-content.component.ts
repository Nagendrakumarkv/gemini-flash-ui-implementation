import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TabFieldConfig } from '../../../models/tab-config.model';
import { CodingDataService } from '../../../services/coding-data.service';
import { TabConfigService } from '../../../services/tab-config.service';
import { MedicalCode } from '../../../services/code-lookup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coding-tab-content',
  templateUrl: './coding-tab-content.component.html',
  styleUrls: ['./coding-tab-content.component.scss']
})
export class CodingTabContentComponent implements OnInit, OnChanges {
  @Input() tabId: string = 'icd';
  @Input() isFullscreen: boolean = false;

  config: TabFieldConfig[] = [];
  entries$: Observable<any[]> | null = null;
  
  newEntry: any = {};
  isExpanded = true;
  headerLabel: string = '';
  errors: { [key: string]: boolean } = {};

  private tabEntries: { [key: string]: any } = {};
  private tabErrors: { [key: string]: any } = {};

  constructor(
    private tabConfigService: TabConfigService,
    private codingDataService: CodingDataService
  ) {}

  ngOnInit() {
    this.loadTab();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tabId']) {
      this.loadTab();
    }
  }

  loadTab() {
    this.config = this.tabConfigService.getTabConfig(this.tabId);
    
    if (!this.tabEntries[this.tabId]) {
      this.tabEntries[this.tabId] = {};
    }
    this.newEntry = this.tabEntries[this.tabId];

    if (!this.tabErrors[this.tabId]) {
      this.tabErrors[this.tabId] = {};
    }
    this.errors = this.tabErrors[this.tabId];
    
    switch (this.tabId) {
      case 'icd': 
        this.entries$ = this.codingDataService.hccData$; 
        this.headerLabel = 'ICD CODES';
        break;
      case 'icd-gaps': 
        this.entries$ = this.codingDataService.gapData$; 
        this.headerLabel = 'ICD GAPS';
        break;
      case 'cpt': 
        this.entries$ = this.codingDataService.cptData$; 
        this.headerLabel = 'CPT CODES';
        break;
      case 'cpt-gaps': 
        this.entries$ = this.codingDataService.cptGapData$; 
        this.headerLabel = 'CPT GAPS';
        break;
    }
  }

  onCodeSelected(code: MedicalCode) {
    this.newEntry['desc'] = code.description;
    if (code.hcc) this.newEntry['hcc'] = code.hcc;
    if (code.raf) this.newEntry['raf'] = code.raf;
  }

  add() {
    this.errors = {};
    let hasError = false;

    this.config.forEach(field => {
      // Validate fields that are not editOnly and not disabled
      if (!field.editOnly && !field.disabled) {
        const val = this.newEntry[field.key];
        if (val === undefined || val === null || (typeof val === 'string' && val.trim() === '')) {
          this.errors[field.key] = true;
          hasError = true;
        }
      }
    });

    if (hasError) return;

    this.codingDataService.addEntry(this.tabId, { ...this.newEntry });
    
    this.tabEntries[this.tabId] = {};
    this.newEntry = this.tabEntries[this.tabId];
    this.tabErrors[this.tabId] = {};
    this.errors = this.tabErrors[this.tabId];
  }

  update(entry: any) {
    this.codingDataService.updateEntry(this.tabId, entry);
  }

  delete(id: string) {
    this.codingDataService.deleteEntry(this.tabId, id);
  }
}
