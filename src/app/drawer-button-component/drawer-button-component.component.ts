import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'drawer-button-component',
  templateUrl: './drawer-button.component.html',
  styleUrls: ['./drawer-button.component.css']
})
export class DrawerButtonComponent {
  private isDeskBackground = true; // Track current state (desk or drawer)

  constructor(private renderer: Renderer2) {}

  toggleView(): void {
    const body = document.body;

    // Smooth transition: add 'fade-out', change class, then 'fade-in'
    this.renderer.addClass(body, 'fade-out');
    setTimeout(() => {
      if (this.isDeskBackground) {
        // Switch to drawer
        this.renderer.removeClass(body, 'desk-background');
        this.renderer.addClass(body, 'drawer-background');
      } else {
        // Switch to desk
        this.renderer.removeClass(body, 'drawer-background');
        this.renderer.addClass(body, 'desk-background');
      }
      this.renderer.removeClass(body, 'fade-out');
      this.renderer.addClass(body, 'fade-in');

      setTimeout(() => {
        this.renderer.removeClass(body, 'fade-in');
      }, 500); // Duration of fade-in
    }, 500); // Duration of fade-out

    this.isDeskBackground = !this.isDeskBackground; // Toggle state
  }
}
