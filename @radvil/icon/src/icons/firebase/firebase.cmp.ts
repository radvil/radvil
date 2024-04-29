import { ChangeDetectionStrategy, Component } from "@angular/core";

// TODO: difine colors from a single input color
@Component({
  standalone: true,
  selector: "icon-firebase",
  templateUrl: "firebase.cmp.svg",
  styleUrls: ["../icon.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFirebase {}
