import { Component, Renderer2 } from '@angular/core';
import {CloseDrawerComponent} from "../close-drawer/close-drawer.component";
import {GameComponent} from "../game/game.component";
import {FloppyDiskComponent} from "../floppy-disk/floppy-disk.component";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-desk-drawer',
  standalone: true,
  imports: [CloseDrawerComponent, GameComponent, FloppyDiskComponent, ContactFormComponent],
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