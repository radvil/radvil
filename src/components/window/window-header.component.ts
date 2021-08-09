import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'rax-window-header',
	template: `
		<div class="action-buttons">
			<button class="close"></button>
			<button class="min"></button>
			<button class="max"></button>
		</div>
		<div class="text"><ng-content></ng-content></div>
		<div class="right-icon">
			<img
				src="assets/icons/debian.png"
				alt="konsole"
				height="22"
				width="22"
			/>
		</div>
	`,
	styles: [
		`
			:host {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 1rem;
				font-family: Ubuntu;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
			}
			.action-buttons {
				max-width: 100px;
				width: 66px;
				display: flex;
				justify-content: space-between;
			}
			button {
				border-radius: 50%;
				height: 18px;
				width: 18px;
				outline: none;
				border: 1px solid white;
				&:hover {
					filter: saturate(0.5);
				}
			}
			.close {
				background: linear-gradient(to right, #fa0000 0%, #a7013b 100%);
			}
			.min {
				background: linear-gradient(to right, #fad900 0%, #e29d3c 100%);
			}
			.max {
				background: linear-gradient(to right, #22d11f 0%, #3abb5a 100%);
			}
			.text {
				text-align: center;
				font-size: 1rem;
			}
			.right-icon {
				cursor: pointer;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxWindowHeader {}
