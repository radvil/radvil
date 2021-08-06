import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'rax-window, [raxWindow]',
	template: `
		<ng-content select="rax-window-header"></ng-content>
		<div class="rax-window--scrollable-container rax-scrollbar-hidden">
			<div class="rax-window--content">
				<ng-content></ng-content>
			</div>
		</div>
	`,
	styles: [
		`
			::ng-deep {
				:root {
					$handler-border-size: 7px;
					$handler-border-offset: -5px;
					$handler-corner-size: 12px;
					$handler-corner-offset: 0px;
				}
			}
      [raxWindow],
			:host {
				border-radius: 10px;
				min-width: 200px;
				min-height: 200px;
				padding: 1rem;
				position: relative;
				display: flex;
				flex-direction: column;
				font-size: 1.2rem;
				color: #eff0f1;
				background-color: #000000bb;
				box-shadow: 0px 3px 20px 3px #00000087;
				backdrop-filter: blur(7px);
				border: 1px solid #2f2f2f;
			}
			.rax-window--scrollable-container {
				overflow-y: auto;
				overflow-x: hidden;
				height: 100%;
			}
			.rax-scrollbar-hidden {
				-ms-overflow-style: none;
				scrollbar-width: none;
				&::-webkit-scrollbar {
					display: none;
				}
			}
			.rax-window--content {
				min-height: 200px;
			}
			@media (max-width: 777px) {
				.rax-window {
					height: 100%;
					width: 100%;
					position: static;
					padding-bottom: 5rem;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxWindow {
	// public size = { height: 463, width: 755 };
	// public position = { top: 50, left: 50 };
	// public directions = ['n', 's', 'w', 'e', 'se'];
}
