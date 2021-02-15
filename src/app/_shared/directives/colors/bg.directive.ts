import { Directive, HostBinding, Input } from '@angular/core';
import { gradientColors, Colors } from './color';

@Directive({
  selector: '[radBg]'
})
export class RadBgColorDirective {
  @Input() radBg: string = "";

  @HostBinding('style.background') get background() {
    if (this.radBg === Colors.PRIMARY) {
      return gradientColors.primary;
    }
    if (this.radBg === Colors.ACCENT) {
      return gradientColors.accent;
    }
    if (this.radBg === Colors.WARN) {
      return gradientColors.warn;
    }
    if (this.radBg === Colors.SUCCESS) {
      return gradientColors.success;
    }
    if (this.radBg === Colors.INFO) {
      return gradientColors.info;
    }
    if (this.radBg === Colors.DANGER) {
      return gradientColors.danger;
    }
    return this.radBg || gradientColors.default;
  }

}
