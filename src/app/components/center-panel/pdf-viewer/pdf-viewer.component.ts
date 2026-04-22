import { Component, Input } from '@angular/core';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  standalone: false
})
export class PdfViewerComponent {
  @Input() filename: string = 'ENC-041 — PCP Visit 09/14/2024.pdf';
  currentPage: number = 1;
  totalPages: number = 6;

  constructor(private toastService: ToastService) {}

  showToast(msg: string) {
    this.toastService.showToast(msg);
  }

  navPage(delta: number) {
    const next = this.currentPage + delta;
    if (next >= 1 && next <= this.totalPages) {
      this.currentPage = next;
    }
  }
}
