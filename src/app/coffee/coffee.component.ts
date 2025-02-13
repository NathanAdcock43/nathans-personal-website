import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initSteamAnimation();
  }

  private initSteamAnimation(): void {
    const spans = document.querySelectorAll('.coffee span');
    spans.forEach((span, index) => {
      span.setAttribute('style', `--v:${index + 1}`);
    });
  }
}

