import { Component } from "@angular/core";
import { RaxGradientBg } from "@rax/materials";
import { RaxWindowCmp } from "src/components/window/window.cmp";

@Component({
  standalone: true,
  selector: "rax-neofetch",
  templateUrl: "./neofetch.cmp.html",
  styleUrls: ["./neofetch.cmp.scss"],
  imports: [RaxGradientBg, RaxWindowCmp],
})
export class NeofetchCmp {}
