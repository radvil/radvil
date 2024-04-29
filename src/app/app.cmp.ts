import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RaxShellModule } from "@rax/materials";

@Component({
  standalone: true,
  selector: "rax-root",
  imports: [RaxShellModule, RouterOutlet],
  template: `
    <rax-shell>
      <router-outlet></router-outlet>
    </rax-shell>
  `,
})
export class AppCmp {}
