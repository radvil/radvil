import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "rax-shell",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="router-outlet"></ng-content>
    <ng-content select="rax-dock"></ng-content>
  `,
})
export class RaxShellCmp {}
