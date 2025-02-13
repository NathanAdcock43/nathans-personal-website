import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  ngOnInit(): void {
    // Optional: Add logic if dynamic behavior is required.
    console.log('Coins component initialized');
  }
}

