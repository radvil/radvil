import { Directive, HostBinding, Input } from "@angular/core";
import { GRADIENT_COLOR, COLOR } from "./colors";

@Directive({
  standalone: true,
  selector: "[uiGradientBg]",
})
export class UiGradientBgCmp {
  @Input() uiGradientBg: typeof GRADIENT_COLOR | string = "";

  @HostBinding("style.background") get background() {
    if (this.uiGradientBg === COLOR.PRIMARY) {
      return GRADIENT_COLOR.PRIMARY;
    } else if (this.uiGradientBg === COLOR.ACCENT) {
      return GRADIENT_COLOR.ACCENT;
    } else if (this.uiGradientBg === COLOR.WARN) {
      return GRADIENT_COLOR.WARN;
    } else if (this.uiGradientBg === COLOR.SUCCESS) {
      return GRADIENT_COLOR.SUCCESS;
    } else if (this.uiGradientBg === COLOR.INFO) {
      return GRADIENT_COLOR.INFO;
    } else if (this.uiGradientBg === COLOR.DANGER) {
      return GRADIENT_COLOR.DANGER;
    }
    return this.uiGradientBg || GRADIENT_COLOR.DEFAULT;
  }
}
