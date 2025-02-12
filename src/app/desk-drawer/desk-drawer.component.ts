import { Component, OnInit, Renderer2 } from '@angular/core';
import {CloseDrawerComponent} from "../close-drawer/close-drawer.component";
import {GameComponent} from "../game/game.component";
import {FloppyDiskComponent} from "../floppy-disk/floppy-disk.component";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-desk-drawer',
  standalone: true,
  imports: [
      CloseDrawerComponent,
      GameComponent,
      FloppyDiskComponent,
      ContactFormComponent],
  templateUrl: './desk-drawer.component.html',
  styleUrls: ['./desk-drawer.component.css']
})
export class DeskDrawerComponent implements OnInit {
  // private isDeskBackground = true; // Track the current background state

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log("DeskDrawerComponent loaded!");
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;

    if (scrollContainer) {
      this.renderer.setStyle(scrollContainer, 'background', `image-set(
            url('/assets/images/webp_sm/DeskDrawer.webp') 1x,
            url('/assets/images/png_sm/DeskDrawer.png') 1x
        ) no-repeat center center`);

      this.renderer.setStyle(scrollContainer, 'background-size', '2300px');

      console.log('Switched to drawer background, and applied background-size: 2300px');
    } else {
      console.error('Scroll container not found');
    }
  }
}