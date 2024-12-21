import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Hover effect for changing link text dynamically
    this.setupHoverEffect('about', 'about me', 'front page');
    this.setupHoverEffect('work', 'work history', 'classifieds');
    this.setupHoverEffect('projects', 'my projects', 'technology');
    this.setupHoverEffect('comics', 'for fun', 'comics');
    this.setupHoverEffect('contact', 'Contact Me', 'Editorials');
  }

  private setupHoverEffect(elementId: string, hoverText: string, originalText: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      // On mouse enter, change text
      this.renderer.listen(element, 'mouseenter', () => {
        element.textContent = hoverText;
      });

      // On mouse leave, revert text
      this.renderer.listen(element, 'mouseleave', () => {
        element.textContent = originalText;
      });
    }
  }
}
