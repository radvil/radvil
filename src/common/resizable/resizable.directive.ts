import {
  Input,
  Directive,
  OnDestroy,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { Directions, RaxDirection, RaxDirectionsType, RaxResizeHandler } from './direction';
import { BREAKPOINTS, isMediaMatched } from '../utils';
import { RaxPosition, RaxPositionConfig } from './position';
import { RaxSize, RaxSizeConfig } from './size';

export interface RaxResizeStyle {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}

@Directive({
  selector: '[raxResizable]',
  exportAs: 'raxResizable',
})
export class RaxResizable implements AfterViewInit, OnDestroy {
  constructor(
    private _elRef: ElementRef<HTMLElement>,
    private _renderer: Renderer2
  ) { }

  private _boxSize = new RaxSize(50, 50);
  private _boxPosition = new RaxPosition(10, 10);
  private _handlerDirections = new Directions([
    RaxDirection.SOUTH_EAST,
    RaxDirection.NORTH_WEST,
  ]);
  private _handlerEls = {} as RaxResizeHandler;
  private _subscription = new Subscription();

  // example: { heigth: 100px, width: 700px };
  @Input('boxSize') boxSize!: RaxSizeConfig;
  // example: { top: 18px, left: 20px };
  @Input('boxPosition') boxPosition!: RaxPositionConfig;
  // example: 'sw, ne' || { sw: true, ne: false };
  @Input('handlerDirections') handlerDirections!: RaxDirectionsType;

  private mousedown$!: Observable<MouseEvent>;
  private mousemove$!: Observable<MouseEvent>;
  private mouseup$!: Observable<MouseEvent>;

  ngAfterViewInit(): void {
    isMediaMatched(BREAKPOINTS.HANDSET)
      ? this.initAsHandset()
      : this.initAsDesktop();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private initAsHandset() {
    const resizableEl = this._elRef.nativeElement;
    this._renderer.setStyle(resizableEl, 'height', '100%');
    this._renderer.setStyle(resizableEl, 'width', '100%');
    this._renderer.setStyle(resizableEl, 'position', 'static');
  }

  private initAsDesktop(): void {
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

    this.setHandlers(resizableBox);
    this.makeStyles(resizableBox, {
      height,
      width,
      left,
      top,
    } as RaxResizeStyle);
  }

  private setHandlers(parentEl: HTMLElement): void {
    (this._handlerDirections.value as Array<RaxDirection>).forEach((direction) => {
      const handler = this._renderer.createElement('div');

      handler.classList.add('rax-resize-handler', direction);
      parentEl.appendChild(handler);
      this._handlerEls[direction] = handler;
      this.prepareHandlerEvent(direction);
    });
  }

  private onDragStyle(direction: string, event: MouseEvent): RaxResizeStyle {
    const prevX = this._boxPosition.left;
    const prevY = this._boxPosition.top;
    const prevWidth = this._boxSize.width;
    const prevHeight = this._boxSize.height;

    if (direction === 'n') {
      if (this._boxSize.height > 200) {
        this._boxPosition.newTop = event.clientY;
      }
      this._boxSize.newHeight = -prevHeight - event.clientY - prevY;
    }
    else if (direction === 's') {
      this._boxSize.newHeight = event.clientY - prevY;
    }
    else if (direction === 'w') {
      if (this._boxSize.width > 200) {
        this._boxPosition.newLeft = event.clientX;
      }
      this._boxSize.newWidth = -prevWidth - event.clientX - prevX;
    }
    else if (direction === 'e') {
      this._boxSize.newWidth = event.clientX - prevX;
    }
    else if (direction === 'se') {
      this._boxSize.newWidth = event.clientX - prevX;
      this._boxSize.newHeight = event.clientY - prevY;
    }
    else if (direction === 'ne') {
      if (this._boxSize.height > 200) {
        this._boxPosition.newTop = event.clientY;
      }
      this._boxSize.newHeight = -prevHeight - event.clientY - prevY;
      this._boxSize.newWidth = event.clientX - prevX;
    }
    else if (direction === 'nw') {
      if (this._boxSize.width > 200) {
        this._boxPosition.newLeft = event.clientX;
      }
      if (this._boxSize.height > 200) {
        this._boxPosition.newTop = event.clientY;
      }
      this._boxSize.newWidth = -prevWidth - event.clientX - prevX;
      this._boxSize.newHeight = -prevHeight - event.clientY - prevY;
    }
    else if (direction === 'sw') {
      if (this._boxSize.width > 200) {
        this._boxPosition.newLeft = event.clientX;
      }
      this._boxSize.newWidth = -prevWidth - event.clientX - prevX;
      this._boxSize.newHeight = event.clientY;
    }

    const { height, width } = this._boxSize.valueInPixels;
    const { top, left } = this._boxPosition.valueInPixels;
    return { height, width, top, left };
  }

  private prepareHandlerEvent(direction: RaxDirection) {
    this.mousedown$ = fromEvent<MouseEvent>(this._handlerEls[direction], 'mousedown');
    this.mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    this.mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    this._subscription.add(
      this.mousedown$
        .pipe(
          tap(() => this._handlerDirections.activate(direction)),
          switchMap(() =>
            this.mousemove$.pipe(
              tap((event) => {
                const { height, width, top, left } = this.onDragStyle(direction, event);
                this.makeStyles(this._elRef.nativeElement, {
                  height,
                  width,
                  left,
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

  private makeStyles(boxEl: HTMLElement, style: RaxResizeStyle): void {
    style.height && this._renderer.setStyle(boxEl, 'height', style.height);
    style.width && this._renderer.setStyle(boxEl, 'width', style.width);
    style.left && this._renderer.setStyle(boxEl, 'left', style.left);
    style.top && this._renderer.setStyle(boxEl, 'top', style.top);
  }
}
