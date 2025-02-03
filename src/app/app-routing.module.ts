import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeskComponent } from './desk/desk.component';
import { DeskDrawerComponent } from './desk-drawer/desk-drawer.component';
import { DrawerButtonComponent } from './drawer-button-component/drawer-button-component.component';
import { NewspaperTechComponent } from "./newspaper-tech/newspaper-tech.component";
import { NewspaperFrontpageComponent } from "./newspaper-frontpage/newspaper-frontpage.component";
import { NewspaperClassifiedComponent } from "./newspaper-classified/newspaper-classified.component";
import { GameComponent } from "./game/game.component";
import { FloppyDiskComponent } from "./floppy-disk/floppy-disk.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { CloseDrawerComponent } from "./close-drawer/close-drawer.component";
import { NewspaperComicsComponent } from "./newspaper-comics/newspaper-comics.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {NewspaperComponent} from "./newspaper/newspaper.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent, // Wrapper for Desk + Newspaper
    children: [
      {
          path: '',
          component: DeskComponent,
          pathMatch: 'full'
      }, // Home (Desk)
      { path: 'newspaper',
        component: NewspaperComponent,
        children: [
          { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
          { path: 'frontpage', component: NewspaperFrontpageComponent },
          { path: 'classified', component: NewspaperClassifiedComponent },
          { path: 'tech', component: NewspaperTechComponent },
          { path: 'comics', component: NewspaperComicsComponent }
        ]
      }
    ]
  },
  { path: 'drawer', component: DeskDrawerComponent },
  { path: 'drawer-button-component', component: DrawerButtonComponent},
  { path: 'close-drawer', component: CloseDrawerComponent },
  { path: 'game', component: GameComponent },
  { path: 'floppy-disk', component: FloppyDiskComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: '**', component: NotFoundComponent }, // Show a 404 page instead of redirecting home
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

