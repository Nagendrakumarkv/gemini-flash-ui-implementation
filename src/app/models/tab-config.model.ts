export interface TabFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'select' | 'opp-lookup' | 'number';
  placeholder?: string;
  options?: string[];         // for type: 'select'
  cols?: number;              // grid column span
  rows?: number;              // grid row span (if multi-row groups)
  disabled?: boolean;
  listId?: string;            // for datalist autocomplete
  editOnly?: boolean;         // field only visible in edit mode
  addOnly?: boolean;          // field only visible in add mode
}
