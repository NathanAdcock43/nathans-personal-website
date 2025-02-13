import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  private hourHand!: HTMLElement;
  private minuteHand!: HTMLElement;
  private secondHand!: HTMLElement;

  ngOnInit(): void {
    this.initializeClockHands();
    setInterval(this.updateClock.bind(this), 1000);
  }

  private initializeClockHands(): void {
    this.hourHand = document.querySelector('[data-hour-hand]') as HTMLElement;
    this.minuteHand = document.querySelector('[data-minute-hand]') as HTMLElement;
    this.secondHand = document.querySelector('[data-second-hand]') as HTMLElement;

    if (!this.hourHand || !this.minuteHand || !this.secondHand) {
      console.error('Clock hand elements not found');
      return;
    }

    this.updateClock(); // Initialize the clock immediately
  }

  private updateClock(): void {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360;
    const minutesDegrees = (minutes / 60) * 360;
    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30; // Add minute offset to hour hand

    if (this.secondHand) {
      this.secondHand.style.setProperty('--rotation', secondsDegrees.toString());
    }
    if (this.minuteHand) {
      this.minuteHand.style.setProperty('--rotation', minutesDegrees.toString());
    }
    if (this.hourHand) {
      this.hourHand.style.setProperty('--rotation', hoursDegrees.toString());
    }
  }
}
