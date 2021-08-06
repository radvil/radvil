import {
	Input,
	Component,
	Renderer2,
	ElementRef,
	AfterViewInit,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: 'rax-avatar',
	template: `<img [src]="imageSrc" alt="portrait" />`,
	styles: [
		`
			:host {
				padding: 5px;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
			}
			img {
				border-radius: 50%;
				border: 2px solid #111111;
				object-fit: cover;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxAvatar implements AfterViewInit {
	constructor(
		private renderer: Renderer2,
		private elRef: ElementRef<HTMLElement>
	) {}

	@Input('src') public imageSrc = 'assets/images/portraits/photo.png';
	@Input('imageHeight') public height = 100;
	@Input('imageWidth') public width = 100;

	ngAfterViewInit(): void {
		const containerEl = this.elRef.nativeElement;
		const imageEl = containerEl.querySelector('img');

		this.renderer.setStyle(containerEl, 'width', `${this.width + 10}px`);
		this.renderer.setStyle(containerEl, 'height', `${this.height + 10}px`);

		this.renderer.setStyle(imageEl, 'width', `${this.width}px`);
		this.renderer.setStyle(imageEl, 'height', `${this.height}px`);
	}
}
