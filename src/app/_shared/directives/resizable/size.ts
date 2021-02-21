export interface RadSize {
  height: number;
  width: number;
}

export class Size implements RadSize {
  constructor(public height: number, public width: number) {
  }

  get value() {
    return { height: this.height, width: this.width };
  }

  get valueInPixels() {
    return {
      height: this.height + 'px',
      width: this.width + 'px'
    }
  }

  set newHeight(value: number) {
    this.height = value;
  }

  set newWidth(value: number) {
    this.width = value;
  }

  update(newSize: RadSize): Size {
    this.height = newSize.height;
    this.width = newSize.width;
    return this;
  }
}