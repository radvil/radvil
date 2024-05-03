import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "ui-desktop-panel",
  styleUrl: "./desktop-panel.cmp.scss",
  templateUrl: "./desktop-panel.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopPanelCmp {}
