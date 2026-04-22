import { Injectable } from '@angular/core';
import { TabFieldConfig } from '../models/tab-config.model';
import { ICD_FIELD_CONFIG, ICD_GAP_FIELD_CONFIG, CPT_FIELD_CONFIG, CPT_GAP_FIELD_CONFIG } from '../config/tab-fields.config';

@Injectable({
  providedIn: 'root'
})
export class TabConfigService {
  getTabConfig(tabId: string): TabFieldConfig[] {
    switch (tabId) {
      case 'icd': return ICD_FIELD_CONFIG;
      case 'icd-gaps': return ICD_GAP_FIELD_CONFIG;
      case 'cpt': return CPT_FIELD_CONFIG;
      case 'cpt-gaps': return CPT_GAP_FIELD_CONFIG;
      default: return [];
    }
  }
}
