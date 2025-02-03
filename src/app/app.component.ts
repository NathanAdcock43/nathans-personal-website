import { Component, Renderer2 } from '@angular/core';
import { DeskDrawerComponent } from './desk-drawer/desk-drawer.component';
import {UIStateService} from "./services/ui-state.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    DeskDrawerComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  constructor(private renderer: Renderer2, public uiState: UIStateService) {}

  ngOnInit() {
    this.updateBodyClass();
  }

  toggleView(): void {
    this.uiState.isCurtainVisible = true; // Transitions into and out of

    setTimeout(() => {
      this.uiState.isDeskBackground = !this.uiState.isDeskBackground; // Toggle background state

      setTimeout(() => {
        this.uiState.isCurtainVisible = false; // Hide curtain after transition
      }, 1000); // Duration of fade-out animation
    }, 1000); // Duration of fade-in animation
  }

  updateBodyClass(): void {
    if (this.uiState.isDeskBackground) {
      this.renderer.removeClass(document.body, 'drawer-background');
      this.renderer.addClass(document.body, 'desk-background');
    } else {
      this.renderer.removeClass(document.body, 'desk-background');
      this.renderer.addClass(document.body, 'drawer-background');
    }
  }
}

