import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rad-window',
  template: `
    <div
      radResizable
      class="rad-window"
      [boxSize]="size"
      [boxPosition]="position"
      [handlerDirections]="directions"
    >
      <ng-content select="rad-window-header"></ng-content>
      <div class="rad-window--scrollable-container rad-scrollbar-hidden">
        <div class="rad-window--content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadWindow {
  public size = { height: 463, width: 755 };
  public position = { top: 50, left: 50 };
  public directions = ['se', 'ne'];
}