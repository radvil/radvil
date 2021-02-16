import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[radDockRound]'
})
export class RadDockDirective {
  @Input('radDockRound') radius: string = "";

  @HostBinding('style.borderRadius') get borderRadius() {
    if (this.radius) return this.radius;
    return "0.5rem 0.5rem 0 0";
  }
}