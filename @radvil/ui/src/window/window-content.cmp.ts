import { Component } from "@angular/core";

// TODO: No need a component for this ??
@Component({
  standalone: true,
  selector: "ui-window-content",
  template: "<ng-content />",
  styles: [
    `
      :host {
        padding: 0 1rem;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 200px;
      }
    `,
  ],
})
export class UiWindowContentCmp {}
