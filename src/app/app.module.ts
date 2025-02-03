import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from './app-layout/app-layout.component'; // Import

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutComponent
    ],
    bootstrap: []
})
export class AppModule {}
