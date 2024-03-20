import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Vehicles</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      background-color: #333;
      padding: 10px;
    }

    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    nav li {
      margin-right: 20px;
    }

    nav a {
      color: #fff;
      text-decoration: none;
    }
  `]
})
export class NavigationComponent {}