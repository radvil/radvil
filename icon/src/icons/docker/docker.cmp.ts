import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "icon-docker",
  templateUrl: "docker.cmp.svg",
  styleUrls: ["../icon.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocker {}
