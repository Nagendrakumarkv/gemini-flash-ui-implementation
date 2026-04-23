import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HccEntry, GapEntry, CptEntry, CptGapEntry } from '../models/coding-entry.model';

@Injectable({
  providedIn: 'root'
})
export class CodingDataService {
  private hccDataSubject = new BehaviorSubject<HccEntry[]>([
    { id: '1', icd: 'E11.65', hcc: '19', raf: '0.302', dos: '09/14/24', desc: 'Type 2 Diabetes Mellitus with Hyperglycemia', src: 'PDF Page 1', conf: 'High', notes: '', opp: 'Existing' },
    { id: '2', icd: 'I50.22', hcc: '85', raf: '0.323', dos: '09/14/24', desc: 'Chronic Systolic Heart Failure', src: 'PDF Page 1', conf: 'High', notes: '', opp: 'Existing' },
    { id: '3', icd: 'I10', hcc: '', raf: '0.000', dos: '08/20/24', desc: 'Essential (primary) hypertension', src: 'PDF Page 2', conf: 'High', notes: 'Routine follow-up', opp: 'New' }
  ]);
  private gapDataSubject = new BehaviorSubject<GapEntry[]>([
    { id: 'g1', icd: 'I42.0', hcc: '85', raf: '0.323', dos: '10/05/23', desc: 'Dilated cardiomyopathy', src: 'Claim History', conf: 'Medium', notes: 'Possible recurrence', status: 'Open' },
    { id: 'g2', icd: 'J44.9', hcc: '111', raf: '0.298', dos: '11/12/23', desc: 'COPD, unspecified', src: 'Claim History', conf: 'High', notes: '', status: 'Open' }
  ]);
  private cptDataSubject = new BehaviorSubject<CptEntry[]>([
    { id: 'c1', cpt: '99214', dos: '09/14/24', desc: 'Office or other outpatient visit, established patient, 30-39 minutes', src: 'PDF Page 1', conf: 'High', notes: '', opp: 'Existing' },
    { id: 'c2', cpt: '3074F', dos: '09/14/24', desc: 'Systolic blood pressure less than 130 mm Hg', src: 'PDF Page 1', conf: 'High', notes: '', opp: 'Existing' }
  ]);
  private cptGapDataSubject = new BehaviorSubject<CptGapEntry[]>([
    { id: 'cg1', cpt: '1111F', dos: '12/01/23', desc: 'Discharge information communicated', src: 'HEDIS History', conf: 'High', notes: 'Pending confirmation', status: 'Pending' }
  ]);

  hccData$ = this.hccDataSubject.asObservable();
  gapData$ = this.gapDataSubject.asObservable();
  cptData$ = this.cptDataSubject.asObservable();
  cptGapData$ = this.cptGapDataSubject.asObservable();

  addEntry(tabId: string, entry: any) {
    const current = this.getDataSubject(tabId).value;
    const newEntry = { ...entry, id: Math.random().toString(36).substr(2, 9) };
    this.getDataSubject(tabId).next([...current, newEntry]);
  }

  updateEntry(tabId: string, entry: any) {
    const current = this.getDataSubject(tabId).value;
    const index = current.findIndex(e => e.id === entry.id);
    if (index > -1) {
      const updated = [...current];
      updated[index] = entry;
      this.getDataSubject(tabId).next(updated);
    }
  }

  deleteEntry(tabId: string, id: string) {
    const current = this.getDataSubject(tabId).value;
    this.getDataSubject(tabId).next(current.filter(e => e.id !== id));
  }

  private getDataSubject(tabId: string): BehaviorSubject<any[]> {
    switch (tabId) {
      case 'icd': return this.hccDataSubject;
      case 'icd-gaps': return this.gapDataSubject;
      case 'cpt': return this.cptDataSubject;
      case 'cpt-gaps': return this.cptGapDataSubject;
      default: return new BehaviorSubject<any[]>([]);
    }
  }
}
