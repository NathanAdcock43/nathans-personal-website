import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-desk-drawer',
  templateUrl: './desk-drawer.component.html',
  styleUrls: ['./desk-drawer.component.css']
})
export class DeskDrawerComponent {
  private isDeskBackground = true; // Track the current background state

  constructor(private renderer: Renderer2) {}

  toggleBackground(): void {
    const body = document.body;
    if (this.isDeskBackground) {
      // Switch to open drawer background
      this.renderer.removeClass(body, 'desk-background');
      this.renderer.addClass(body, 'drawer-background');
    } else {
      // Switch to desk background
      this.renderer.removeClass(body, 'drawer-background');
      this.renderer.addClass(body, 'desk-background');
    }
    this.isDeskBackground = !this.isDeskBackground; // Toggle the state
  }
}