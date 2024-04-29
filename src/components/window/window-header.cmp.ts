import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "rax-window-header",
  templateUrl: "./window-header.cmp.html",
  styleUrl: "./window-header.cmp.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxWindowHeaderCmp {}
