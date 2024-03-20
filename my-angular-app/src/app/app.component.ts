import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDateTime: string = ''; // Initializing the property

  constructor() {
    this.updateCurrentDateTime();
    setInterval(() => {
      this.updateCurrentDateTime();
    }, 1000);
  }

  updateCurrentDateTime() {
    this.currentDateTime = new Date().toLocaleString();
  }
}