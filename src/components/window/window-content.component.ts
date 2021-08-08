import {
	Component,
	Renderer2,
	ElementRef,
	AfterViewInit,
} from '@angular/core';

@Component({
	selector: 'rax-window-content',
	template: `<ng-content></ng-content>`,
	styles: [
		`
			:host {
				padding: 0 1rem;
				height: 100%;
			}
		`,
	],
})
export class RaxWindowContent implements AfterViewInit {
	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef<HTMLElement>
	) {}

	ngAfterViewInit(): void {
		const host = this.elementRef.nativeElement;

		this.renderer.addClass(host, 'rax-scrollable-container');
		this.renderer.addClass(host, 'rax-scrollbar-hidden');
	}
}
