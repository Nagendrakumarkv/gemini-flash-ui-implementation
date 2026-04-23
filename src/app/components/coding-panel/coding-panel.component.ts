import { Component, OnInit } from '@angular/core';
import { CodingDataService } from '../../services/coding-data.service';

@Component({
  selector: 'app-coding-panel',
  templateUrl: './coding-panel.component.html',
  styleUrls: ['./coding-panel.component.scss']
})
export class CodingPanelComponent implements OnInit {
  activeTab: string = 'icd';
  selectedDos: string = '09/14/24';
  isFullscreen: boolean = false;
  dosList: string[] = ['09/14/24', '07/22/24', '05/10/24', '03/01/24'];

  addDos() {
    // Get the earliest date from the list to add an even earlier one
    const dates = this.dosList.map(d => new Date(d));
    const earliestDate = new Date(Math.min(...dates.map(d => d.getTime())));
    
    const newDate = new Date(earliestDate);
    newDate.setMonth(newDate.getMonth() - 1); // Go back one month
    
    const formatted = newDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    });
    
    this.dosList.push(formatted);
    this.selectedDos = formatted;
  }

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
