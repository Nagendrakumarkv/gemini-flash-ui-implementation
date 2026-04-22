import { Component, OnInit } from '@angular/core';
import { CodingDataService } from '../../services/coding-data.service';

@Component({
  selector: 'app-coding-panel',
  templateUrl: './coding-panel.component.html',
  styleUrls: ['./coding-panel.component.scss'],
  standalone: false
})
export class CodingPanelComponent implements OnInit {
  activeTab: string = 'icd';
  selectedDos: string = '09/14/24';
  isFullscreen: boolean = false;

  tabs = [
    { id: 'icd', label: 'ICD', count: 0 },
    { id: 'icd-gaps', label: 'ICD Gaps', count: 0 },
    { id: 'cpt', label: 'CPT', count: 0 },
    { id: 'cpt-gaps', label: 'CPT Gaps', count: 0 }
  ];

  constructor(private codingService: CodingDataService) {}

  ngOnInit() {
    this.codingService.hccData$.subscribe(data => this.updateTabCount('icd', data.length));
    this.codingService.gapData$.subscribe(data => this.updateTabCount('icd-gaps', data.length));
    this.codingService.cptData$.subscribe(data => this.updateTabCount('cpt', data.length));
    this.codingService.cptGapData$.subscribe(data => this.updateTabCount('cpt-gaps', data.length));
  }

  private updateTabCount(id: string, count: number) {
    const tab = this.tabs.find(t => t.id === id);
    if (tab) tab.count = count;
  }

  selectTab(id: string) {
    this.activeTab = id;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
