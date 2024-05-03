import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "icon-ionic",
  templateUrl: "ionic.cmp.svg",
  styleUrls: ["../icon.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconIonic {}
