import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

interface WindowSize {
  width: number;
  height: number;
}

interface WindowPosition {
  left: number;
  top: number;
}

@Component({
  selector: 'rad-window',
  template: `
    <div #window class="rad-window">
      <ng-content select="rad-window-header"></ng-content>
      <div class="rad-window-content">
        <ng-content></ng-content>
      </div>
      <span class="resizer">=></span>
    </div>
  `,
  styleUrls: ['./window.component.scss']
})
export class RadWindow implements AfterViewInit {
  @Input('windowSize') windowSize: WindowSize = { height: 450, width: 800 };
  @ViewChild('window') windowEl!: ElementRef<HTMLElement>;
  resizerEl!: ChildNode | null;

  constructor(private _rd: Renderer2) { }

  ngAfterViewInit(): void {
    this._initElementValues();
  }

  private _initElementValues(): void {
    this._setWindowSize({
      height: this.windowSize.height,
      width: this.windowSize.width
    });
    this.resizerEl = this.windowEl.nativeElement.lastChild;
    console.log(this.resizerEl);
  }

  private _setWindowSize(size: WindowSize): void {
    this._rd.setStyle(this.windowEl.nativeElement, "height", `${size.height}px`);
    this._rd.setStyle(this.windowEl.nativeElement, "width", `${size.width}px`);
  }

  private _setWindowPosition(): void {

  }

}