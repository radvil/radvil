import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'rax-dock',
	template: `<ng-content select="rax-dock-item"></ng-content>`,
	styles: [
		`
			:host {
				position: fixed;
				z-index: 2;
				backdrop-filter: blur(5px);
				box-shadow: 0px -3px 8px 3px #17171f73;
				border-top: 1px solid #464646;
				bottom: 0;
				max-height: 100px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				@media (min-width: 777px) {
					left: calc(50vw - 180px);
					width: 360px;
					border: 1px solid #464646;
					border-bottom: none;
				}
			}
		`,
	],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxDock {
	private defaultBgColor = '#383838a6';

	@Input() dockTheme = 'dark';
	@Input('raxDockRound') radius: string = '';

	@HostBinding('style.borderRadius') get borderRadius() {
		if (this.radius) return this.radius;
		return '0.5rem 0.5rem 0 0';
	}

	@HostBinding('style.backgroundColor') get backgroundColor() {
		if (this.dockTheme === 'light') return '#ffffffa6';
		else if (this.dockTheme === 'dark') return '#000000bb';
		else return this.defaultBgColor;
	}
}
