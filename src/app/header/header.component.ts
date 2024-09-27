import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `<header>
    <img
      class="star-icon"
      src="/assets/images/icon-star.svg"
      alt="star icon"
    /><span class="text">FAQs</span>
  </header>`,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
