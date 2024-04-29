import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "ui-window",
  styleUrl: "./window.cmp.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="rax-window-header"></ng-content>
    <ng-content></ng-content>
  `,
})
export class UiWindowCmp implements AfterContentInit {
  @Input("windowType") windowStyle: "basic" | "terminal" = "basic";

  get host() {
    return this.elementRef.nativeElement;
  }

  ngAfterContentInit(): void {
    if (this.windowStyle === "terminal") {
      this.renderer.setStyle(this.host, "backdrop-filter", "blur(7px)");
      this.renderer.setStyle(this.host, "background-color", "#000000bb");
    }
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLElement>,
  ) {}
}
