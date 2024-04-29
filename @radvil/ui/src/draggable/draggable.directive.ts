import {
  Directive,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  Input,
} from "@angular/core";
import { Observable, fromEvent, Subscription } from "rxjs";
import { map, switchMap, takeUntil, tap } from "rxjs/operators";

interface HandlerStye {
  [key: string]: number | string;
}

@Directive({
  standalone: true,
  selector: "[uiDraggable]",
  exportAs: "uiDraggable",
})
export class UiDraggable implements AfterViewInit, OnDestroy {
  constructor(
    private _elRef: ElementRef<HTMLElement>,
    private _rd: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this._dragHandlerHeight =
      typeof this.handlerHeight === "number"
        ? this.handlerHeight.toString() + "px"
        : this.handlerHeight;

    const dragHandler = this._rd.createElement("div");
    const handlerStyle: HandlerStye = {
      "background-color": "transparent",
      height: this._dragHandlerHeight,
      width: "100%",
      position: "absolute",
      left: 0,
      top: 0,
    };

    this._elRef.nativeElement.appendChild(dragHandler);

    Object.keys(handlerStyle).forEach((key) => {
      this._rd.setStyle(dragHandler, key, handlerStyle[key]);
    });

    this._prepareDragEvent(document, dragHandler);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private mousedown$!: Observable<MouseEvent>;
  private mousemove$!: Observable<MouseEvent>;
  private mouseup$!: Observable<MouseEvent>;
  private _dragHandlerHeight!: string | number;
  private _subscription = new Subscription();

  @Input("dragHandlerHeight") handlerHeight: string | number = "3rem";

  private _prepareDragEvent(parentEl: any, handlerEl: HTMLElement): void {
    this.mousedown$ = fromEvent<MouseEvent>(handlerEl, "mousedown");
    this.mousemove$ = fromEvent<MouseEvent>(parentEl, "mousemove");
    this.mouseup$ = fromEvent<MouseEvent>(parentEl, "mouseup");

    this._subscription.add(
      this.mousedown$
        .pipe(
          map((mouseDownEvent) => {
            const { left, top } =
              this._elRef.nativeElement.getBoundingClientRect();
            return {
              prevX: mouseDownEvent.clientX,
              prevY: mouseDownEvent.clientY,
              prevLeft: Math.round(left),
              prevTop: Math.round(top),
            };
          }),
          switchMap(({ prevX, prevY, prevLeft, prevTop }) =>
            this.mousemove$.pipe(
              tap((mouseMoveEvent) => {
                // clientX - prevClientX + prevLeft
                this._setStyle(this._elRef.nativeElement, {
                  left: mouseMoveEvent.clientX - prevX + prevLeft,
                  top: mouseMoveEvent.clientY - prevY + prevTop,
                });
              }),
              takeUntil(this.mouseup$),
            ),
          ),
        )
        .subscribe(),
    );
  }

  private _setStyle(boxEl: HTMLElement, style: { [key: string]: any }): void {
    style["left"] && this._rd.setStyle(boxEl, "left", `${style["left"]}px`);
    style["top"] && this._rd.setStyle(boxEl, "top", `${style["top"]}px`);
  }
}
