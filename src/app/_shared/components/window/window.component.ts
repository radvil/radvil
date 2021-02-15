import { Component } from '@angular/core';

@Component({
  selector: 'rad-window',
  template: `
    <div class="rad-window">
      <ng-content select="rad-window-header"></ng-content>
      <div class="rad-window-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./window.component.scss']
})
export class RadWindow { }