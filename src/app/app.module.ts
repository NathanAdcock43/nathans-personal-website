import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [],
})
export class AppModule {}
