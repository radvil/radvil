import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "rax-panel",
  styleUrl: "./panel.cmp.scss",
  templateUrl: "./panel.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxPanelCmp {}
