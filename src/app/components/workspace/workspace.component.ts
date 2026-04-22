import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  standalone: false
})
export class WorkspaceComponent {
  leftWidth = 220;
  rightWidth = 380;
  bottomHeight = 220;

  isResizingLeft = false;
  isResizingRight = false;
  isResizingBottom = false;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isResizingLeft) {
      this.leftWidth = Math.max(150, Math.min(400, event.clientX));
    } else if (this.isResizingRight) {
      const windowWidth = window.innerWidth;
      this.rightWidth = Math.max(250, Math.min(600, windowWidth - event.clientX));
    } else if (this.isResizingBottom) {
      const windowHeight = window.innerHeight;
      this.bottomHeight = Math.max(100, Math.min(500, windowHeight - event.clientY));
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.isResizingLeft = false;
    this.isResizingRight = false;
    this.isResizingBottom = false;
    document.body.style.cursor = 'default';
  }

  startResizingLeft(event: MouseEvent) {
    event.preventDefault();
    this.isResizingLeft = true;
    document.body.style.cursor = 'col-resize';
  }

  startResizingRight(event: MouseEvent) {
    event.preventDefault();
    this.isResizingRight = true;
    document.body.style.cursor = 'col-resize';
  }

  startResizingBottom(event: MouseEvent) {
    event.preventDefault();
    this.isResizingBottom = true;
    document.body.style.cursor = 'row-resize';
  }
}
