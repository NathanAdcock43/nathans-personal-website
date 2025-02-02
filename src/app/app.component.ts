import { Component } from '@angular/core';
import { DeskComponent } from './desk/desk.component';
import { DeskDrawerComponent } from './desk-drawer/desk-drawer.component';
import {DrawerButtonComponent} from "./drawer-button-component/drawer-button-component.component";
import {CloseDrawerComponent} from "./close-drawer/close-drawer.component";
import {CoffeeComponent} from "./coffee/coffee.component";
import {CoinsComponent} from "./coins/coins.component";
import {DustMotesComponent} from "./dust-motes/dust-motes.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {FloppyDiskComponent} from "./floppy-disk/floppy-disk.component";
import {GameComponent} from "./game/game.component";
import {MagazineComponent} from "./magazine/magazine.component";
import {NewspaperClassifiedComponent} from "./newspaper-classified/newspaper-classified.component";
import {NewspaperComicsComponent} from "./newspaper-comics/newspaper-comics.component";
import {NewspaperFrontpageComponent} from "./newspaper-frontpage/newspaper-frontpage.component";
import {NewspaperTechComponent} from "./newspaper-tech/newspaper-tech.component";
import {NotepadComponent} from "./notepad/notepad.component";
import {WatchComponent} from "./watch/watch.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
      DeskComponent,
      DeskDrawerComponent,
      DrawerButtonComponent,
      CloseDrawerComponent,
      CoffeeComponent,
      CoinsComponent,
      DustMotesComponent,
      ContactFormComponent,
      FloppyDiskComponent,
      GameComponent,
      MagazineComponent,
      NewspaperClassifiedComponent,
      NewspaperComicsComponent,
      NewspaperFrontpageComponent,
      NewspaperTechComponent,
      NotepadComponent,
      WatchComponent,
      RouterModule
  ]
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

