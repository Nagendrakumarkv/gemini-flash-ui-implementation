import { Component, OnInit } from '@angular/core';
import { EncounterService } from '../../services/encounter.service';
import { Encounter } from '../../models/encounter.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-encounter-panel',
  templateUrl: './encounter-panel.component.html',
  styleUrls: ['./encounter-panel.component.scss'],
  standalone: false
})
export class EncounterPanelComponent implements OnInit {
  encounters$: Observable<Encounter[]>;
  selectedEncounter: Encounter | null = null;

  constructor(private encounterService: EncounterService) {
    this.encounters$ = this.encounterService.encounters$;
  }

  ngOnInit() {
    this.encounterService.selectedEncounter$.subscribe(enc => {
      this.selectedEncounter = enc;
    });
  }

  selectEncounter(encounter: Encounter) {
    this.encounterService.selectEncounter(encounter);
  }
}
