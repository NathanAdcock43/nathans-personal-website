import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-close-drawer',
  templateUrl: './close-drawer.component.html',
  styleUrls: ['./close-drawer.component.css']
})
export class CloseDrawerComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const drawerElement = this.el.nativeElement.querySelector('#closeDrawer');
    const closeTextElement = this.el.nativeElement.querySelector('#close');

    if (drawerElement && closeTextElement) {
      // Hover effect: Change text on mouseover
      this.renderer.listen(drawerElement, 'mouseover', () => {
        this.renderer.setProperty(closeTextElement, 'textContent', 'Back to home page');
      });

      // Hover effect: Revert text on mouseout
      this.renderer.listen(drawerElement, 'mouseout', () => {
        this.renderer.setProperty(closeTextElement, 'textContent', 'CLOSE DRAWER');
      });

      // Click event: Redirect to index.html
      this.renderer.listen(drawerElement, 'click', () => {
        window.location.replace('index.html');
        console.log('Redirecting to index.html');
      });
    } else {
      console.error('Required elements not found for hover and click events');
    }
  }
}