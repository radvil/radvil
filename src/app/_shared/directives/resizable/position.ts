export interface RadPosition {
  top: number;
  left: number;
}

export class Position implements RadPosition {
  constructor(public top: number, public left: number) { }

  get value() {
    return { top: this.top, left: this.left } as RadPosition;
  }

  get valueInPixels() {
    return {
      top: this.top + 'px',
      left: this.left + 'px'
    }
  }

  set newTop(topValue: number) {
    this.top = topValue;
  }

  set newLeft(leftValue: number) {
    this.left = leftValue;
  }

  update(newPosition: RadPosition): RadPosition {
    this.top = newPosition.top;
    this.left = newPosition.left;
    return this;
  }

  decrease(currentCursor: RadPosition): RadPosition {
    this.top -= currentCursor.top;
    this.left -= currentCursor.left;
    return this;
  }
}
