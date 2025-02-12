import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {provideHttpClient} from "@angular/common/http";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutComponent,
        FontAwesomeModule
    ],
    bootstrap: []
})
export class AppModule {}
