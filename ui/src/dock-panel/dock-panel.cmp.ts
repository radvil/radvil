import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "ui-dock-panel",
  styleUrl: "./dock-panel.cmp.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content select="ui-dock-panel-item"></ng-content>`,
})
export class UiDockPanelCmp {
  private defaultBgColor = "#383838a6";

  @Input() dockTheme = "dark";
  @Input("rounded") radius: string = "";

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
