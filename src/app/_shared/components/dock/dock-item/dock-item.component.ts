import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RadDockItem } from './dock-item.interface';

@Component({
  selector: 'rad-dock-item',
  template: `
    <div class="dock__item" [ngClass]="{ 'active': isActive, 'darken': isDarken }">
      <div class="image__container" [radTooltip]="dockItem.description">
        <img [src]="dockItem?.iconPath" [alt]="dockItem?.label" />
      </div>
    </div>
  `,
  styleUrls: ['./dock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadDockItemComponent {
  @Input() dockItem: RadDockItem = {} as RadDockItem;
  @Input() isActive = false;
  @Input() isDarken = false;

}
