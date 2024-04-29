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
  selector: "rax-window",
  template: `
    <ng-content select="rax-window-header"></ng-content>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        left: 5rem;
        top: 5rem;
        resize: both;
        width: 50svw;
        overflow: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        color: #eff0f1;
        border: 1px solid #2f2f2f;
        border-radius: 10px;
      }
    `,
  ],
})
export class RaxWindowCmp implements AfterContentInit {
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
