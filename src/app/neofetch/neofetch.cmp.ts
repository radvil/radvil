import { Component } from "@angular/core";
import { UiGradientBgCmp, UiWindowCmp } from "@radvil/ui";

@Component({
  standalone: true,
  selector: "rax-neofetch",
  templateUrl: "./neofetch.cmp.html",
  styleUrls: ["./neofetch.cmp.scss"],
  imports: [UiGradientBgCmp, UiWindowCmp],
})
export class NeofetchCmp {}
