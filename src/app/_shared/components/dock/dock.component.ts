import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'rad-dock',
  template: `
    <ng-content select="rad-dock-item"></ng-content>
  `,
  styleUrls: ['./dock.component.scss']
})
export class RadDockComponent {
  private defaultBgColor = "#383838a6";
  @Input() dockTheme = "dark";

  @HostBinding('style.backgroundColor') get backgroundColor() {
    if (this.dockTheme === "light") return "#ffffffa6";
    else if (this.dockTheme === 'dark') return "#0e0e15a6";
    else return this.defaultBgColor;
  }
}
