import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'rax-panel',
	template: `
		<div class="rax-panel-container">
			<div class="left">
				<ng-content select="rax-logo"></ng-content>
				<div class="window-title">current window title...</div>
				<div>current window available menu list here</div>
			</div>

			<span class="rax-spacer"></span>

			<div class="right">panel menu right here...</div>
		</div>
	`,
	styles: [
		`
			.rax-panel-container {
				display: flex;
				align-items: center;
				width: 100vw;
				height: 2.7rem;
				padding: 10px;
				position: fixed;
				top: 0;
				z-index: 2;
				font-size: 1.1rem;
				color: #9e9e9e;
				font-family: Roboto;
				background-color: #00000054;
				box-shadow: 0px 1px 7px 1px #00000077;
				backdrop-filter: blur(1px);
				border-bottom: 1px solid #2f2f2f70;
			}
			.left {
				display: flex;
				align-items: center;
				> * {
					margin-right: 1rem;
				}
				.window-title {
					font-weight: bold;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxPanel {}
