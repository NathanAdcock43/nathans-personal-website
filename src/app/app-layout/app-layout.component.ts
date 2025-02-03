import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from "@angular/router";

import { DustMotesComponent } from "../dust-motes/dust-motes.component";
import { WatchComponent } from "../watch/watch.component";
import { CoinsComponent } from "../coins/coins.component";
import { CoffeeComponent } from "../coffee/coffee.component";
import { MagazineComponent } from "../magazine/magazine.component";
import {NotepadComponent} from "../notepad/notepad.component";

@Component({
  selector: 'app-app-layout',
  standalone: true,
  template: `
    <!-- Static elements that should persist across all views -->
    <app-notepad></app-notepad>
    <app-dust-motes></app-dust-motes>
    <app-watch></app-watch>
    <app-coins></app-coins>
    <app-coffee></app-coffee>
    <app-magazine></app-magazine>

    <!-- Router Outlet: This swaps between Desk and Newspaper -->
    <router-outlet></router-outlet>
  `,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DustMotesComponent,
    WatchComponent,
    CoinsComponent,
    CoffeeComponent,
    MagazineComponent,
    NotepadComponent
  ],
  styles: []
})
export class AppLayoutComponent {}
