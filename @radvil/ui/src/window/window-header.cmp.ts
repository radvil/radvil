import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "ui-window-header",
  styleUrl: "./window-header.cmp.scss",
  templateUrl: "./window-header.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiWindowHeaderCmp {}
