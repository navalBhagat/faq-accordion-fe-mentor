import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `<div class="background-image"></div>
    <main>
      <div class="white-box"></div>
    </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'faq-accordion-fe-mentor';
}
