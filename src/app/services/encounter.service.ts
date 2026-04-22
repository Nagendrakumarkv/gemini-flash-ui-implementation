import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Encounter } from '../models/encounter.model';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
  private encountersSubject = new BehaviorSubject<Encounter[]>([
    { id: 'ENC-041', dos: '09/14/2024', provider: 'Dr. Sarah Chen, MD', status: 'pending', tags: ['PCP', 'Diabetes'] },
    { id: 'ENC-040', dos: '08/22/2024', provider: 'Dr. James Wilson', status: 'done', tags: ['Cardiology'] },
    { id: 'ENC-039', dos: '07/10/2024', provider: 'Dr. Sarah Chen, MD', status: 'done', tags: ['PCP'] },
    { id: 'ENC-038', dos: '05/05/2024', provider: 'Dr. Maria Garcia', status: 'done', tags: ['Ophthalmology'] }
  ]);

  encounters$ = this.encountersSubject.asObservable();

  private selectedEncounterSubject = new BehaviorSubject<Encounter | null>(this.encountersSubject.value[0]);
  selectedEncounter$ = this.selectedEncounterSubject.asObservable();

  selectEncounter(encounter: Encounter) {
    this.selectedEncounterSubject.next(encounter);
  }
}
