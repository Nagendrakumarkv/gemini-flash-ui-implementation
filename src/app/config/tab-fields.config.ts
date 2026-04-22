import { TabFieldConfig } from '../models/tab-config.model';

export const ICD_FIELD_CONFIG: TabFieldConfig[] = [
  { key: 'icd',  label: 'ICD-10',  type: 'text',   placeholder: 'E11.65', cols: 3, listId: 'icdList' },
  { key: 'hcc',  label: 'HCC Cat', type: 'text',   placeholder: '19',     cols: 3 },
  { key: 'raf',  label: 'RAF Wt',  type: 'text',   placeholder: '0.302',  cols: 3 },
  { key: 'dos',  label: 'DOS',     type: 'text',   placeholder: '09/14/24', cols: 3 },
  { key: 'desc', label: 'Description', type: 'text', placeholder: '...', cols: 6, disabled: true },
  { key: 'src',  label: 'Evidence Source', type: 'select', options: ['PDF Page 1', 'Claims', 'Lab Result', 'Manual'], cols: 6 },
  { key: 'conf', label: 'Confidence', type: 'select', options: ['High','Medium','Low'], cols: 4 },
  { key: 'notes',label: 'Coder Notes', type: 'text', placeholder: 'Notes...', cols: 4 },
  { key: 'opp',  label: 'Opportunity Type', type: 'opp-lookup', cols: 4 },
];

export const ICD_GAP_FIELD_CONFIG: TabFieldConfig[] = [
  { key: 'icd',  label: 'ICD-10 Gap', type: 'text',   placeholder: 'I50.22', cols: 4 },
  { key: 'hcc',  label: 'HCC Cat',    type: 'text',   placeholder: '85',     cols: 4 },
  { key: 'type', label: 'Gap Type',   type: 'select', options: ['Recapture', 'New Suspect', 'Potential'], cols: 4 },
  { key: 'desc', label: 'Description', type: 'text',   placeholder: '...',    cols: 8, disabled: true },
  { key: 'raf',  label: 'RAF Impact',  type: 'text',   placeholder: '0.368',  cols: 4 },
  { key: 'conf', label: 'Priority',    type: 'select', options: ['High','Medium','Low'], cols: 4 },
  { key: 'src',  label: 'Evidence',    type: 'text',   placeholder: 'PDF p.1, Labs', cols: 4 },
  { key: 'opp',  label: 'Opportunity Type', type: 'opp-lookup', cols: 4 },
];

export const CPT_FIELD_CONFIG: TabFieldConfig[] = [
  { key: 'cpt',  label: 'CPT Code', type: 'text',   placeholder: '99215',  cols: 4 },
  { key: 'dos',  label: 'DOS',      type: 'text',   placeholder: '09/14/24', cols: 4 },
  { key: 'desc', label: 'Description', type: 'text', placeholder: '...', cols: 4, disabled: true },
  { key: 'src',  label: 'Evidence Source', type: 'select', options: ['PDF Page 1', 'Claims', 'Lab Result', 'Manual'], cols: 4 },
  { key: 'conf', label: 'Confidence', type: 'select', options: ['High','Medium','Low'], cols: 4 },
  { key: 'notes',label: 'Coder Notes', type: 'text', placeholder: 'Notes...', cols: 4 },
  { key: 'opp',  label: 'Opportunity Type', type: 'opp-lookup', cols: 12 },
];

export const CPT_GAP_FIELD_CONFIG: TabFieldConfig[] = [
  { key: 'cpt',  label: 'CPT Code', type: 'text',   placeholder: '99215',  cols: 4 },
  { key: 'dos',  label: 'DOS',      type: 'text',   placeholder: '09/14/24', cols: 4 },
  { key: 'desc', label: 'Description', type: 'text', placeholder: '...', cols: 4, disabled: true },
  { key: 'src',  label: 'Evidence Source', type: 'select', options: ['PDF Page 1', 'Claims', 'Lab Result', 'Manual'], cols: 4 },
  { key: 'conf', label: 'Confidence', type: 'select', options: ['High','Medium','Low'], cols: 4 },
  { key: 'notes',label: 'Coder Notes', type: 'text', placeholder: 'Notes...', cols: 4 },
  { key: 'opp',  label: 'Opportunity Type', type: 'opp-lookup', cols: 12 },
];
