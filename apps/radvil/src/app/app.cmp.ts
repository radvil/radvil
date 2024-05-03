import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UiLayoutShellCmp } from "@neo/ui";

@Component({
  standalone: true,
  selector: "rad-root",
  imports: [UiLayoutShellCmp, RouterOutlet],
  template: `
    <ui-layout-shell>
      <router-outlet></router-outlet>
    </ui-layout-shell>
  `,
})
export class AppCmp {}
