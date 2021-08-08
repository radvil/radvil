import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[raxTooltip]',
})
export class RaxTooltip implements OnInit {
	constructor(
		private _elRef: ElementRef<HTMLElement>,
		private _renderer: Renderer2
	) {}

	ngOnInit() {
		this.setTooltip();
	}

	@Input('raxTooltip') tooltip = '';

	setTooltip(): void {
		if (this.tooltip) {
			const elRef = this._elRef.nativeElement;
			this._renderer.setAttribute(elRef, 'data-tooltip', this.tooltip);
		}
	}
}
