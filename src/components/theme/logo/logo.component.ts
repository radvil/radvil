import {
	Input,
	Component,
	Renderer2,
	ElementRef,
	AfterViewInit,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: 'rax-logo',
	template: ` <div class="rax-logo"></div> `,
	styles: [
		`
			:host {
				margin-right: 1rem;
				cursor: pointer;
				.rax-logo {
					background-size: contain !important;
					background-repeat: no-repeat !important;
					height: inherit !important;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxLogo implements AfterViewInit {
	constructor(
		private elRef: ElementRef<HTMLElement>,
		private rd: Renderer2
	) {}

	@Input('imageUrl') imageUrl = 'assets/icons/debian.png';
	@Input('imageHeight') imageHeight = 22;

	ngAfterViewInit(): void {
		const host = this.elRef.nativeElement;
		this.rd.setStyle(host, 'width', `${this.imageHeight}px`);
		this.rd.setStyle(host, 'height', `${this.imageHeight}px`);

		const logo = host.querySelector('.rax-logo');
		this.rd.setStyle(logo, 'background', `url('${this.imageUrl}')`);
	}
}
