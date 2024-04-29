import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "ui-layout-shell",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="router-outlet"></ng-content>
    <ng-content select="ui-dock-panel"></ng-content>
  `,
})
export class UiLayoutShellCmp {}
