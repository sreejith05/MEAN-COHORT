import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy; {{ currentYear }} ABC Automobiles. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}