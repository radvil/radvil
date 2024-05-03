import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "icon-nx",
  templateUrl: "nx.cmp.svg",
  styleUrls: ["../icon.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconNx {}
