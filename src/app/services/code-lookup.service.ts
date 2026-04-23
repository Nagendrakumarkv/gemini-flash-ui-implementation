import { Injectable } from '@angular/core';

export interface MedicalCode {
  code: string;
  description: string;
  hcc?: string;
  raf?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CodeLookupService {
  private icdCodes: MedicalCode[] = [
    { code: 'E11.65', description: 'Type 2 diabetes mellitus with hyperglycemia', hcc: '19', raf: '0.302' },
    { code: 'I50.22', description: 'Chronic systolic (congestive) heart failure', hcc: '85', raf: '0.323' },
    { code: 'I10', description: 'Essential (primary) hypertension' },
    { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', hcc: '19', raf: '0.118' },
    { code: 'J44.9', description: 'Chronic obstructive pulmonary disease, unspecified', hcc: '111', raf: '0.346' },
    { code: 'M17.11', description: 'Unilateral primary osteoarthritis, right knee' },
    { code: 'Z00.00', description: 'Encounter for general adult medical examination without abnormal findings' }
  ];

  private cptCodes: MedicalCode[] = [
    { code: '99213', description: 'Office or other outpatient visit, established patient, 20-29 minutes' },
    { code: '99214', description: 'Office or other outpatient visit, established patient, 30-39 minutes' },
    { code: '99215', description: 'Office or other outpatient visit, established patient, 40-54 minutes' },
    { code: '99203', description: 'Office or other outpatient visit, new patient, 30-44 minutes' },
    { code: '99204', description: 'Office or other outpatient visit, new patient, 45-59 minutes' },
    { code: '11102', description: 'Tangential biopsy of skin; single lesion' },
    { code: '93000', description: 'Electrocardiogram, routine ECG with at least 12 leads; with interpretation and report' }
  ];

  lookupCodes(type: string, query: string): MedicalCode[] {
    const codes = type.startsWith('icd') ? this.icdCodes : this.cptCodes;
    if (!query) return codes.slice(0, 5);
    const q = query.toLowerCase();
    return codes.filter(c => 
      c.code.toLowerCase().includes(q) || 
      c.description.toLowerCase().includes(q)
    ).slice(0, 10);
  }

  getCodeInfo(type: string, code: string): MedicalCode | undefined {
    const codes = type.startsWith('icd') ? this.icdCodes : this.cptCodes;
    return codes.find(c => c.code === code);
  }
}
