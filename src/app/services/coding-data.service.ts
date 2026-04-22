import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HccEntry, GapEntry, CptEntry, CptGapEntry } from '../models/coding-entry.model';

@Injectable({
  providedIn: 'root'
})
export class CodingDataService {
  private hccDataSubject = new BehaviorSubject<HccEntry[]>([
    { id: '1', icd: 'E11.65', hcc: '19', raf: '0.302', dos: '09/14/24', desc: 'Type 2 Diabetes Mellitus with Hyperglycemia', src: 'PDF Page 1', conf: 'High', notes: '', opp: 'Existing' },
    { id: '2', icd: 'I50.22', hcc: '85', raf: '0.323', dos: '09/14/24', desc: 'Chronic Systolic Heart Failure', src: 'PDF Page 1', conf: 'High', notes: '', opp: 'Existing' }
  ]);
  private gapDataSubject = new BehaviorSubject<GapEntry[]>([]);
  private cptDataSubject = new BehaviorSubject<CptEntry[]>([]);
  private cptGapDataSubject = new BehaviorSubject<CptGapEntry[]>([]);

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
