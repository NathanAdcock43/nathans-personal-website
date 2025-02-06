import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-newspaper-editorial',
  templateUrl: './newspaper-editorial.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./newspaper-editorial.component.css']
})
export class NewspaperEditorialComponent {
  title = "Editorial Section";
  content = "This is a placeholder for the newspaper editorial content.";


}

