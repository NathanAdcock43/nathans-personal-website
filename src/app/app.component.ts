import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDeskBackground = true; // Tracks current state (desk or drawer)
  isCurtainVisible = false; // Tracks curtain visibility

  toggleView(): void {
    this.isCurtainVisible = true; // Transitions into and out of

    setTimeout(() => {
      this.isDeskBackground = !this.isDeskBackground; // Toggle background state

      setTimeout(() => {
        this.isCurtainVisible = false; // Hide curtain after transition
      }, 1000); // Duration of fade-out animation
    }, 1000); // Duration of fade-in animation
  }
}

