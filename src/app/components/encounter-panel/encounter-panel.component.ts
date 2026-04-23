import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../../services/encounter.service';
import { Encounter } from '../../models/encounter.model';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-encounter-panel',
  templateUrl: './encounter-panel.component.html',
  styleUrls: ['./encounter-panel.component.scss']
})
export class EncounterPanelComponent implements OnInit {
  private searchQuery$ = new BehaviorSubject<string>('');
  filteredEncounters$: Observable<Encounter[]>;
  selectedEncounter: Encounter | null = null;

  constructor(private encounterService: EncounterService) {
    this.filteredEncounters$ = combineLatest([
      this.encounterService.encounters$,
      this.searchQuery$
    ]).pipe(
      map(([encounters, query]) => {
        if (!query) return encounters;
        const q = query.toLowerCase();
        return encounters.filter(e => 
          e.id.toLowerCase().includes(q) ||
          e.dos.toLowerCase().includes(q) ||
          e.provider.toLowerCase().includes(q) ||
          (e.tags && e.tags.some(t => t.toLowerCase().includes(q)))
        );
      })
    );
  }

  ngOnInit() {
    this.encounterService.selectedEncounter$.subscribe(enc => {
      this.selectedEncounter = enc;
    });
  }

  onSearch(event: any) {
    this.searchQuery$.next(event.target.value);
  }

  selectEncounter(encounter: Encounter) {
    this.encounterService.selectEncounter(encounter);
  }
}
