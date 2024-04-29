import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "rax-dock",
  styleUrl: "./dock.cmp.scss",
  template: `<ng-content select="rax-dock-item"></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxDockCmp {
  private defaultBgColor = "#383838a6";

  @Input() dockTheme = "dark";
  @Input("raxDockRound") radius: string = "";

  @HostBinding("style.borderRadius") get borderRadius() {
    if (this.radius) return this.radius;
    return "0.5rem 0.5rem 0 0";
  }

  @HostBinding("style.backgroundColor") get backgroundColor() {
    if (this.dockTheme === "light") return "#ffffffa6";
    else if (this.dockTheme === "dark") return "#000000bb";
    else return this.defaultBgColor;
  }
}
