import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { Directions, DirOption, RadDirectionsType } from './direction';
import { BREAKPOINTS, mediaIsMatched } from './media-matcher';
import { Position, RadPosition } from './position';
import { RadSize, Size } from './size';
import { RadResizeStyle } from './style';

@Directive({
  selector: '[radResizable]',
  exportAs: 'radResizable',
})
export class RadResizableDirective implements AfterViewInit, OnDestroy {
  constructor(
    private _elRef: ElementRef<HTMLElement>,
    private _renderer: Renderer2
  ) {}

  private _boxSize = new Size(50, 50);
  private _boxPosition = new Position(10, 10);
  private _handlerDirections = new Directions([
    DirOption.SOUTH_EAST,
    DirOption.NORTH_WEST,
  ]);
  private _handlers = {} as any;
  private _subscription = new Subscription();

  // example: { heigth: 100px, width: 700px };
  @Input('boxSize') boxSize!: RadSize;
  // example: { top: 18px, left: 20px };
  @Input('boxPosition') boxPosition!: RadPosition;
  // example: 'sw, ne' || { sw: true, ne: false };
  @Input('handlerDirections') handlerDirections!: RadDirectionsType;

  private mousedown$!: Observable<MouseEvent>;
  private mousemove$!: Observable<MouseEvent>;
  private mouseup$!: Observable<MouseEvent>;

  ngAfterViewInit(): void {
    mediaIsMatched(BREAKPOINTS.HANDSET)
      ? this._initAsHandset()
      : this._initAsDesktop();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _initAsHandset() {
    const resizableEl = this._elRef.nativeElement;
    this._renderer.setStyle(resizableEl, 'height', '100%');
    this._renderer.setStyle(resizableEl, 'width', '100%');
    this._renderer.setStyle(resizableEl, 'position', 'static');
  }

  private _initAsDesktop(): void {
    if (this.boxSize) {
      this._boxSize.update({
        height: this.boxSize.height,
        width: this.boxSize.width,
      });
    }
    if (this.boxPosition) {
      this._boxPosition.update({
        top: this.boxPosition.top,
        left: this.boxPosition.left,
      });
    }
    if (this.handlerDirections) {
      this._handlerDirections.setValue(this.handlerDirections);
    }

    const resizableBox = this._elRef.nativeElement;
    const { height, width } = this._boxSize.valueInPixels;
    const { top, left } = this._boxPosition.valueInPixels;

    this._setHandlers(resizableBox);
    this._makeStyles(resizableBox, {
      height,
      width,
      left,
      top,
    } as RadResizeStyle);
  }

  private _setHandlers(parentEl: HTMLElement): void {
    this._handlerDirections.value.forEach((direction) => {
      const handler = this._renderer.createElement('div');

      handler.classList.add('rad-handler', direction);
      parentEl.appendChild(handler);
      this._handlers[direction] = handler;
      this._prepareHandlerEvent(this._handlers[direction]);
    });
  }

  private _prepareHandlerEvent(handler: HTMLElement) {
    this.mousedown$ = fromEvent<MouseEvent>(handler, 'mousedown');
    this.mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    this.mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    this._subscription.add(
      this.mousedown$
        .pipe(
          switchMap(() =>
            this.mousemove$.pipe(
              tap((event) => {
                this._boxSize.newWidth = event.clientX - this._boxPosition.left;
                this._boxSize.newHeight = event.clientY - this._boxPosition.top;

                const { height, width } = this._boxSize.valueInPixels;
                const { top } = this._boxPosition.valueInPixels;
                this._makeStyles(this._elRef.nativeElement, {
                  height,
                  width,
                  top,
                });
              }),
              takeUntil(this.mouseup$)
            )
          )
        )
        .subscribe()
    );
  }

  private _makeStyles(boxEl: HTMLElement, style: RadResizeStyle): void {
    style.height && this._renderer.setStyle(boxEl, 'height', style.height);
    style.width && this._renderer.setStyle(boxEl, 'width', style.width);
    style.left && this._renderer.setStyle(boxEl, 'left', style.left);
    style.top && this._renderer.setStyle(boxEl, 'top', style.top);
  }
}
