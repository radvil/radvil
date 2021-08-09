import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'rax-panel',
	template: `
		<div class="rax-panel-container">
			<div class="left">
				<ng-content select="rax-logo"></ng-content>
				<div class="window-title">terminal - whoam...</div>
				<ul class="menu-list">
					<li class="menu-list-item">File</li>
					<li class="menu-list-item">Edit</li>
					<li class="menu-list-item">View</li>
					<li class="menu-list-item">Bookmarks</li>
					<li class="menu-list-item">Settings</li>
					<li class="menu-list-item">Help</li>
				</ul>
			</div>

			<span class="rax-spacer"></span>

			<div class="right">Angular Developer</div>
		</div>
	`,
	styles: [
		`
			.rax-panel-container {
				display: flex;
				align-items: center;
				width: 100vw;
				height: 3rem;
				padding: 10px;
				position: fixed;
				top: 0;
				z-index: 2;
				font-size: 1.07rem;
				color: #9e9e9e;
				font-family: Roboto;
				background-color: #00000054;
				box-shadow: 0px 1px 7px 1px #00000077;
				backdrop-filter: blur(1px);
				border-bottom: 1px solid #2f2f2f70;
			}
			.menu-list {
				display: flex;
				align-items: center;
				margin: 0;
				padding: 0;
				list-style: none;
			}
			.menu-list-item {
				margin-right: 1rem;
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
      .right {
        font-weight: bold;
      }
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaxPanel {}
