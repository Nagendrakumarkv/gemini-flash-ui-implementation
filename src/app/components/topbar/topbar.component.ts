import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: false
})
export class TopbarComponent {
  constructor(private toastService: ToastService) {}

  showToast(msg: string) {
    this.toastService.showToast(msg);
  }
}
