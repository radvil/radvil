import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RaxDockItemConfig } from "./dock-item.interface";

@Component({
  standalone: true,
  selector: "rax-dock-item",
  styleUrl: "./dock-item.cmp.scss",
  templateUrl: "./dock-item.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxDockItemCmp {
  // TODO: Set default fallback config
  @Input() dockItem: RaxDockItemConfig = {} as RaxDockItemConfig;
  @Input() isActive = false;
  @Input() isDarken = false;
}
