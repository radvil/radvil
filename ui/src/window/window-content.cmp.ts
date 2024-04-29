import { Component, Renderer2, ElementRef, AfterViewInit } from "@angular/core";

// TODO: No need a component for this ??
@Component({
  standalone: true,
  selector: "ui-window-content",
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: 0 1rem;
        height: 100%;
      }
    `,
  ],
})
export class UiWindowContentCmp implements AfterViewInit {
  ngAfterViewInit(): void {
    const host = this.elementRef.nativeElement;
    this.renderer.addClass(host, "rax-scrollable-container");
    this.renderer.addClass(host, "rax-scrollbar-hidden");
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLElement>,
  ) {}
}
