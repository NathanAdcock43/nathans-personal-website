import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';
import {FaIconComponent, FaIconLibrary, IconDefinition} from "@fortawesome/angular-fontawesome";
import {faLocationArrow, faTree, faTrophy, faUpload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-close-drawer',
  templateUrl: './close-drawer.component.html',
  imports: [
    FaIconComponent
  ],
  styleUrls: ['./close-drawer.component.css']
})
export class CloseDrawerComponent implements  AfterViewInit{
  upLoad: IconDefinition = faUpload;
  constructor(
      private el: ElementRef,
      private renderer: Renderer2,
      library: FaIconLibrary
  ) {
    library.addIcons(faTree, faTrophy, faLocationArrow);
  }

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
        window.location.replace('/newspaper/frontpage');
        console.log('Redirecting to front-page');
      });
    } else {
      console.error('Required elements not found for hover and click events');
    }
  }
}