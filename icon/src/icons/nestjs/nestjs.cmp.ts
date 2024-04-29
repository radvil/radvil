import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "icon-nestjs",
  templateUrl: "nestjs.cmp.svg",
  styleUrls: ["../icon.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconNestjs {}
