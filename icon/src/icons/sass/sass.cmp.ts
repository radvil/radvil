import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "icon-sass",
  templateUrl: "sass.cmp.svg",
  styleUrls: ["../icon.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSass {}
