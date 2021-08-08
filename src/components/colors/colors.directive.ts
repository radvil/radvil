import { Directive, HostBinding, Input } from '@angular/core';
import { GRADIENT_COLOR, COLOR } from './colors';

@Directive({ selector: '[raxColor]' })
export class RaxColorTypography {
  @Input('raxColor') colorName = "";

  @HostBinding('style.color') get color() {
    if (this.colorName === COLOR.PRIMARY) {
      return "#00C69f";
    }
    else if (this.colorName === COLOR.ACCENT) {
      return "#0094D4";
    }
    else if (this.colorName === COLOR.INFO) {
      return "#f05033";
    }
    else if (this.colorName === COLOR.WARN) {
      return "#DD0031";
    }
    else if (this.colorName === COLOR.DANGER) {
      return "#FF0000";
    }
    return this.colorName || "#CCC";
  }
}

@Directive({ selector: '[raxColorBg]' })
export class RaxColorBackground {
  @Input() raxColorBg: string = "";

  @HostBinding('style.background') get background() {
    if (this.raxColorBg === COLOR.PRIMARY) {
      return GRADIENT_COLOR.PRIMARY;
    }
    if (this.raxColorBg === COLOR.ACCENT) {
      return GRADIENT_COLOR.ACCENT;
    }
    if (this.raxColorBg === COLOR.WARN) {
      return GRADIENT_COLOR.WARN;
    }
    if (this.raxColorBg === COLOR.SUCCESS) {
      return GRADIENT_COLOR.SUCCESS;
    }
    if (this.raxColorBg === COLOR.INFO) {
      return GRADIENT_COLOR.INFO;
    }
    if (this.raxColorBg === COLOR.DANGER) {
      return GRADIENT_COLOR.DANGER;
    }
    return this.raxColorBg || GRADIENT_COLOR.DEFAULT;
  }

}
