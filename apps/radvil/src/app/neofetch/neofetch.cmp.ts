import { Component, input } from "@angular/core";
import {
  IconAngular,
  IconCss,
  IconDocker,
  IconFirebase,
  IconGit,
  IconHtml,
  IconIonic,
  IconJavascript,
  IconMongodb,
  IconNestjs,
  IconNgrx,
  IconNodejs,
  IconNx,
  IconPhotoshop,
  IconRxjs,
  IconSass,
  IconTux,
  IconTypescript,
} from "@neo/icon";
import { UiGradientBgCmp, UiWindowCmp } from "@neo/ui";
import { LetDirective } from "@ngrx/component";

@Component({
  standalone: true,
  selector: "rad-neofetch",
  templateUrl: "./neofetch.cmp.html",
  styleUrls: ["./neofetch.cmp.scss"],
  imports: [
    UiGradientBgCmp,
    UiWindowCmp,
    LetDirective,
    IconAngular,
    IconJavascript,
    IconTypescript,
    IconTux,
    IconCss,
    IconHtml,
    IconGit,
    IconNodejs,
    IconMongodb,
    IconPhotoshop,
    IconDocker,
    IconNestjs,
    IconFirebase,
    IconRxjs,
    IconNgrx,
    IconNx,
    IconIonic,
    IconSass,
  ],
})
export class NeofetchCmp {
  readonly iconHeight = input<number>(50);
}
