import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeskComponent } from './desk/desk.component';
import { DeskDrawerComponent } from './desk-drawer/desk-drawer.component';
import { DrawerButtonComponent } from './drawer-button-component/drawer-button-component.component';
import { WatchComponent } from "./watch/watch.component";
import { NotepadComponent } from "./notepad/notepad.component";
import { NewspaperTechComponent } from "./newspaper-tech/newspaper-tech.component";
import { NewspaperFrontpageComponent } from "./newspaper-frontpage/newspaper-frontpage.component";
import { NewspaperClassifiedComponent } from "./newspaper-classified/newspaper-classified.component";
import { MagnifyComponent } from "./magazine/magazine.component";
import { GameComponent } from "./game/game.component";
import { FloppyDiskComponent } from "./floppy-disk/floppy-disk.component";
import { DustMotesComponent } from "./dust-motes/dust-motes.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { CoinsComponent } from "./coins/coins.component";
import { CoffeeComponent } from "./coffee/coffee.component";
import { CloseDrawerComponent } from "./close-drawer/close-drawer.component";
import { NewspaperComicsComponent } from "./newspaper-comics/newspaper-comics.component";

const routes: Routes = [
  { path: '', component: DeskComponent }, // Default route (Desk View)
  { path: 'drawer', component: DeskDrawerComponent }, // Desk Drawer View
  { path: 'drawer-button-component', component: DrawerButtonComponent},
  { path: 'close-drawer', component: CloseDrawerComponent },
  { path: 'game', component: GameComponent },
  { path: 'floppy-disk', component: FloppyDiskComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'notepad', component: NotepadComponent },
  { path: 'newspaper-tech', component: NewspaperTechComponent },
  { path: 'newspaper-comics', component: NewspaperComicsComponent },
  { path: 'newspaper-frontpage', component: NewspaperFrontpageComponent },
  { path: 'newspaper-classified', component: NewspaperClassifiedComponent },
  { path: 'magnify', component: MagnifyComponent },
  { path: 'dust-motes', component: DustMotesComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

