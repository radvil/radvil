import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UiLayoutShellCmp } from "@radvil/ui";

@Component({
  standalone: true,
  selector: "rax-root",
  imports: [UiLayoutShellCmp, RouterOutlet],
  template: `
    <ui-layout-shell>
      <router-outlet></router-outlet>
    </ui-layout-shell>
  `,
})
export class AppCmp {}
