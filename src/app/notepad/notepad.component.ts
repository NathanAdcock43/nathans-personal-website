import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  dayOfWeek: string = '';
  dayOfMonth: string = '';
  month: string = '';

  ngOnInit(): void {
    this.updateDate();
  }

  private updateDate(): void {
    const currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
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
