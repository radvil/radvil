import { Component } from "@angular/core";
import {
  IconAngular,
  IconCss,
  IconGit,
  IconHtml,
  IconJavascript,
  IconTux,
  IconTypescript,
  IconNodejs,
  IconMongodb,
  IconPhotoshop,
} from "@radvil/icon";
import { UiGradientBgCmp, UiWindowCmp } from "@radvil/ui";

@Component({
  standalone: true,
  selector: "rax-neofetch",
  templateUrl: "./neofetch.cmp.html",
  styleUrls: ["./neofetch.cmp.scss"],
  imports: [
    UiGradientBgCmp,
    UiWindowCmp,
    IconAngular,
    IconJavascript,
    IconTypescript,
    IconTux,
    IconCss,
    IconHtml,
    IconGit,
    IconNodejs,
    IconMongodb,
    IconPhotoshop
  ],
})
export class NeofetchCmp {}
