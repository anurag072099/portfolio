import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="head">
      <div class="kicker">{{kicker}}</div>
      <h2 class="h2">{{title}}</h2>
      <p class="p" *ngIf="subtitle">{{subtitle}}</p>
    </div>
  `,
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent{
  @Input() kicker = '';
  @Input() title = '';
  @Input() subtitle?: string;
}
