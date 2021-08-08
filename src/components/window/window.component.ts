import {
	AfterContentInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
  Renderer2,
} from '@angular/core';

@Component({
	selector: 'rax-window',
	template: `
		<ng-content select="rax-window-header"></ng-content>
		<ng-content></ng-content>
	`,
	styles: [
		`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				font-size: 1.2rem;
				color: #eff0f1;
				border: 1px solid #2f2f2f;
				border-radius: 10px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxWindow implements AfterContentInit {
	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef<HTMLElement>
	) {}

	@Input('windowType') windowStyle: 'basic' | 'terminal' = 'basic';

  get host() {
    return this.elementRef.nativeElement;
  }

	ngAfterContentInit(): void {
		if (this.windowStyle === 'terminal') {
			this.renderer.setStyle(this.host, 'backdrop-filter', 'blur(7px)');
			this.renderer.setStyle(this.host, 'background-color', '#000000bb');
		}
	}
}
