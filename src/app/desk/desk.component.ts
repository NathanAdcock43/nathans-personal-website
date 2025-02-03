import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperComponent } from '../newspaper/newspaper.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-desk',
  standalone: true,
  imports: [
    CommonModule,
    NewspaperComponent
  ],
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']

})
export class DeskComponent {

}
