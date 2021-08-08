import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'rax-window',
	template: `
		<ng-content select="rax-window-header"></ng-content>
		<div class="rax-scrollable-container rax-scrollbar-hidden">
			<ng-content></ng-content>
		</div>
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
export class RaxWindow {}
