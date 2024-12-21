import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes'; // Assuming routes are defined here
import { AppComponent } from './app.component';

// Import your components
import { DeskComponent } from './desk/desk.component';
import { DeskDrawerComponent } from './desk-drawer/desk-drawer.component';
import { DrawerButtonComponent } from './drawer-button-component/drawer-button-component.component';
import {WatchComponent} from "./watch/watch.component";
import {NotepadComponent} from "./notepad/notepad.component";
import {NewspaperTechComponent} from "./newspaper-tech/newspaper-tech.component";
import {NewspaperComicsComponent} from "./newspaper-frontpage/newspaper-frontpage.component";
import {NewspaperClassifiedComponent} from "./newspaper-classified/newspaper-classified.component";
import {MagnifyComponent} from "./magazine/magazine.component";
import {GameComponent} from "./game/game.component";
import {FloppyDiskComponent} from "./floppy-disk/floppy-disk.component";
import {DustMotesComponent} from "./dust-motes/dust-motes.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {CoinsComponent} from "./coins/coins.component";
import {CoffeeComponent} from "./coffee/coffee.component";
import {CloseDrawerComponent} from "./close-drawer/close-drawer.component";

@NgModule({
    declarations: [
        AppComponent, // Root component
        DeskComponent,
        DeskDrawerComponent,
        DrawerButtonComponent,
        CloseDrawerComponent,
        CoffeeComponent,
        CoinsComponent,
        ContactFormComponent,
        DeskDrawerComponent,
        DrawerButtonComponent,
        DustMotesComponent,
        FloppyDiskComponent,
        GameComponent,
        MagnifyComponent, // Magazine Component
        NewspaperClassifiedComponent,
        NewspaperComicsComponent,
        NewspaperComicsComponent,
        NewspaperTechComponent,
        NotepadComponent,
        WatchComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule, // Import routing module
    ],
    providers: [], // Add any services if needed
    bootstrap: [AppComponent], // The entry point of the app
})
export class AppModule {}
