import { AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { RadSize, Size } from '../../directives/resizable/size';

@Component({
  selector: 'rad-avatar',
  template: `
    <div class="rad-avatar" radBg="success">
      <img src="assets/images/portraits/photo.png" alt="portrait" />
    </div>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class RadAvatarComponent implements AfterViewInit {
  constructor(private _renderer: Renderer2, private _elRef: ElementRef<HTMLElement>) {
  }

  @Input('imageHeight') height!: number;
  @Input('imageWidth') width!: number;

  private _imageSize = new Size(100, 100);

  ngAfterViewInit(): void {
    if (this.height) this._imageSize.newHeight = this.height;
    if (this.width) this._imageSize.newWidth = this.width;
    this._setBorderStyle();
  }

  private _setBorderStyle(): void {
    const container = this._elRef.nativeElement.querySelector('.rad-avatar');
    this._renderer.addClass(container, "rad-avatar-bordered");
  }
}

