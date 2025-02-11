import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'drawer-button-component',
  standalone: true,
  templateUrl: './drawer-button-component.component.html',
  styleUrls: ['./drawer-button-component.component.css']
})
export class DrawerButtonComponent {
  private isDeskBackground = true; // Track current state (desk or drawer)

  constructor(private renderer: Renderer2) {}

  toggleView(): void {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;

    if (!scrollContainer) {
      console.error('Scroll container not found');
      return;
    }

    // Smooth transition: add 'fade-out', change background and height, then 'fade-in'
    this.renderer.addClass(scrollContainer, 'fade-out');

    setTimeout(() => {
      if (this.isDeskBackground) {
        // Switch to drawer
        this.renderer.setStyle(scrollContainer, 'background', `image-set(
            url('/assets/images/webp_sm/DeskDrawer.webp') 1x,
            url('/assets/images/png_sm/DeskDrawer.png') 1x
        ) no-repeat center center`);

        this.renderer.setStyle(scrollContainer, 'background-size', '2300px');

        console.log('Switched to drawer background, and applied background-size: 2300px');
      } else {
        // Switch to desk
        this.renderer.setStyle(scrollContainer, 'background', `image-set(
             url('/assets/images/webp_sm/Desk-Background.webp') 1x,
             url('/assets/images/png_sm/Desk-Background.png') 1x
         ) no-repeat center center`);

        this.renderer.setStyle(scrollContainer, 'background-size', 'cover');

        console.log('Switched to desk background, and applied background-size: cover');
      }

      this.renderer.removeClass(scrollContainer, 'fade-out');
      this.renderer.addClass(scrollContainer, 'fade-in');

      setTimeout(() => {
        this.renderer.removeClass(scrollContainer, 'fade-in');
      }, 500); // Duration of fade-in
    }, 500); // Duration of fade-out

    this.isDeskBackground = !this.isDeskBackground; // Toggle state
  }

}
