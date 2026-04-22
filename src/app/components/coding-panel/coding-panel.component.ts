import { Component } from '@angular/core';

@Component({
  selector: 'app-coding-panel',
  templateUrl: './coding-panel.component.html',
  styleUrls: ['./coding-panel.component.scss'],
  standalone: false
})
export class CodingPanelComponent {
  activeTab: string = 'icd';
  selectedDos: string = '09/14/24';
  isFullscreen: boolean = false;

  tabs = [
    { id: 'icd', label: 'ICD', count: 12 },
    { id: 'icd-gaps', label: 'ICD Gaps', count: 7 },
    { id: 'cpt', label: 'CPT', count: 28 },
    { id: 'cpt-gaps', label: 'CPT Gaps', count: 4 }
  ];

  selectTab(id: string) {
    this.activeTab = id;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
