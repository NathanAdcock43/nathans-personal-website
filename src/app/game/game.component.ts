import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {
  private clicks: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const gameToggleButton = this.el.nativeElement.querySelector('#gametoggle');

    if (gameToggleButton) {
      // Attach the click event listener
      this.renderer.listen(gameToggleButton, 'click', () => {
        this.handleToggle(gameToggleButton);
      });
    } else {
      console.error('Game toggle button not found.');
    }
  }

  private handleToggle(button: HTMLElement): void {
    if (this.clicks) {
      console.log('clicked');
      this.setVisibility('#car-2', 'visible');
      this.setVisibility('#obstacle-1', 'visible');
      this.setVisibility('#obstacle-4', 'visible');
      this.setVisibility('#lap-2', 'visible');

      this.setVisibility('#obstacle-2', 'hidden');
      this.setVisibility('#obstacle-3', 'hidden');
      this.setVisibility('#car-1', 'hidden');
      this.setVisibility('#lap-1', 'hidden');

      this.renderer.setStyle(button, 'left', '180px');
    } else {
      console.log('clicked');
      this.setVisibility('#obstacle-2', 'visible');
      this.setVisibility('#obstacle-3', 'visible');
      this.setVisibility('#car-1', 'visible');
      this.setVisibility('#lap-1', 'visible');

      this.setVisibility('#obstacle-1', 'hidden');
      this.setVisibility('#obstacle-4', 'hidden');
      this.setVisibility('#car-2', 'hidden');
      this.setVisibility('#lap-2', 'hidden');

      this.renderer.setStyle(button, 'left', '207px');
    }

    this.clicks = !this.clicks; // Toggle the click state
  }

  private setVisibility(selector: string, visibility: string): void {
    const element = this.el.nativeElement.querySelector(selector);
    if (element) {
      this.renderer.setStyle(element, 'visibility', visibility);
    } else {
      console.warn(`Element with selector "${selector}" not found.`);
    }
  }
}

