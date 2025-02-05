import { Component, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class NewspaperComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) {}


  ngOnInit() {
    this.setDate();
  }

  setDate() {
    const issueDate = document.getElementById('issueDate');
    if (issueDate) {
      const today = new Date();
      issueDate.innerText = today.toDateString();
    }
  }


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
