import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { UiDockPanelItemConfig } from "./dock-panel-item.interface";

@Component({
  standalone: true,
  selector: "ui-dock-panel-item",
  styleUrl: "./dock-panel-item.cmp.scss",
  templateUrl: "./dock-panel-item.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDockPanelItemCmp {
  // TODO: Set default fallback config
  @Input() dockItem: UiDockPanelItemConfig = {} as UiDockPanelItemConfig;
  @Input() isActive = false;
  @Input() isDarken = false;
}
