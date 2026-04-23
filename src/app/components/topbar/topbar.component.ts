import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CodingDataService } from '../../services/coding-data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  icdCount = 0;
  icdGapCount = 0;
  cptCount = 0;
  cptGapCount = 0;

  constructor(
    private toastService: ToastService,
    private codingService: CodingDataService
  ) {}

  ngOnInit() {
    this.codingService.hccData$.subscribe(data => this.icdCount = data.length);
    this.codingService.gapData$.subscribe(data => this.icdGapCount = data.length);
    this.codingService.cptData$.subscribe(data => this.cptCount = data.length);
    this.codingService.cptGapData$.subscribe(data => this.cptGapCount = data.length);
  }

  showToast(msg: string) {
    this.toastService.showToast(msg);
  }
}
