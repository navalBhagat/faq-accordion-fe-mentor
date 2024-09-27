import { Component, Input } from '@angular/core';
import { QnA } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="accordion" (click)="toggleAccordion()">
      <span>{{ qna.question }}</span>
      <img
        [src]="
          isOpen
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg'
        "
      />
    </div>
    <div *ngIf="isOpen" class="accordion-content">
      {{ qna.answer }}
    </div>`,
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() qna!: QnA;
  isOpen: boolean = false;
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
