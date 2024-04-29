import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RaxDockItemConfig } from "./dock-item.interface";

@Component({
  selector: "rax-dock-item",
  template: `
    <div class="dock__item" [ngClass]="{ active: isActive, darken: isDarken }">
      <div class="image__container">
        <img [src]="dockItem.iconPath" [alt]="dockItem.label" />
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        flex: 1;
        padding: 0.5rem;
      }
      .image__container {
        padding: 3px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background: linear-gradient(to right, #fb286f 0%, #ff954a 100%);
          box-shadow: 0px 0px 9px 3px #bf839c7d;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .active {
        border-bottom: 2px solid #ff7979;
        .image__container {
          background: linear-gradient(to right, #fb286f 0%, #ff954a 100%);
          box-shadow: 0px 0px 9px 3px #bf839c7d;
        }
      }
      .darken {
        border-bottom: 2px solid #fff;
        filter: brightness(0.5);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxDockItem {
  @Input() dockItem: RaxDockItemConfig = {} as RaxDockItemConfig;
  @Input() isActive = false;
  @Input() isDarken = false;
}
