import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { Colors, gradientColors } from './color';

@Directive({
  selector: '[radColor]'
})
export class RadColorDirective {
  @Input('radColor') colorName = "";

  @HostBinding('style.color') get color() {
    if (this.colorName === Colors.PRIMARY) {
      return "#00C69f";
    }
    if (this.colorName === Colors.ACCENT) {
      return "#0094D4";
    }
    if (this.colorName === Colors.INFO) {
      return "#f05033";
    }
    if (this.colorName === Colors.WARN) {
      return "#DD0031";
    }
    if (this.colorName === Colors.DANGER) {
      return "#FF0000"
    }
    return this.colorName || "#CCC";
  }

}
