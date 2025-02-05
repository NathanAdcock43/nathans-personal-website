import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  dayOfWeek: string = '';
  dayOfMonth: string = '';
  month: string = '';

  ngOnInit(): void {
    this.updateDate();
    setTimeout(function() {
      document.getElementById("delayedButton").classList.add("show");
    }, 14000); // 30 seconds delay
  }

  private updateDate(): void {
    const currentDate = new Date();
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    this.dayOfWeek = days[currentDate.getDay()];
    const dateString = currentDate.getDate().toString().padStart(2, '0'); // Ensures two digits
    this.dayOfMonth = dateString;
    this.month = months[currentDate.getMonth()];

    // Dynamically update the DOM
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const dayOfMonth1Element = document.getElementById('dayOfMonth1');
    const dayOfMonth2Element = document.getElementById('dayOfMonth2');
    const monthElement = document.getElementById('Month');

    if (dayOfWeekElement) {
      dayOfWeekElement.textContent = this.dayOfWeek;
    }
    if (dayOfMonth1Element) {
      dayOfMonth1Element.textContent = this.dayOfMonth[0];
    }
    if (dayOfMonth2Element) {
      dayOfMonth2Element.textContent = this.dayOfMonth[1];
    }
    if (monthElement) {
      monthElement.textContent = this.month;
    }
  }
}
