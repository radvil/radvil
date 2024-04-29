import { Directive, HostBinding, Input } from "@angular/core";
import { GRADIENT_COLOR, COLOR } from "./colors";

@Directive({
  standalone: true,
  selector: "[raxGradientBg]",
})
export class RaxGradientBg {
  @Input() raxGradientBg: typeof GRADIENT_COLOR | string = "";

  @HostBinding("style.background") get background() {
    if (this.raxGradientBg === COLOR.PRIMARY) {
      return GRADIENT_COLOR.PRIMARY;
    } else if (this.raxGradientBg === COLOR.ACCENT) {
      return GRADIENT_COLOR.ACCENT;
    } else if (this.raxGradientBg === COLOR.WARN) {
      return GRADIENT_COLOR.WARN;
    } else if (this.raxGradientBg === COLOR.SUCCESS) {
      return GRADIENT_COLOR.SUCCESS;
    } else if (this.raxGradientBg === COLOR.INFO) {
      return GRADIENT_COLOR.INFO;
    } else if (this.raxGradientBg === COLOR.DANGER) {
      return GRADIENT_COLOR.DANGER;
    }
    return this.raxGradientBg || GRADIENT_COLOR.DEFAULT;
  }
}
