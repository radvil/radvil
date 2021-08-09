export interface RaxPositionConfig {
  top: number;
  left: number;
}

export class RaxPosition implements RaxPositionConfig {
  constructor(public top: number, public left: number) { }

  get value() {
    return { top: this.top, left: this.left } as RaxPositionConfig;
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

  update(newPosition: RaxPositionConfig): RaxPositionConfig {
    this.top = newPosition.top;
    this.left = newPosition.left;
    return this;
  }

  decrease(currentCursor: RaxPositionConfig): RaxPositionConfig {
    this.top -= currentCursor.top;
    this.left -= currentCursor.left;
    return this;
  }
}
