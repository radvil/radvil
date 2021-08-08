/**
 * @originalAuthor https://github.com/bennadel
 *
 */
export interface RaxSnowFlakeConfig {
	depth: number;
	left: number;
	speed: number;
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, NgModule, OnChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
	selector: 'rax-snow-effect',
	inputs: ['depth', 'speed'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			[style.animation-duration.s]="verticalDuration"
			[style.animation-delay.s]="verticalDelay"
			class="vertical-track"
		>
			<div
				[style.animation-duration.s]="horizontalDuration"
				[style.animation-delay.s]="horizontalDelay"
				class="horizontal-track"
			>
				<span
					[style.opacity]="flakeOpacity"
					[style.width.px]="flakeSize"
					[style.height.px]="flakeSize"
					class="flake"
				>
				</span>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
				height: 101vh;
				pointer-events: none;
				position: fixed;
				top: -1vh;
			}
			.vertical-track {
				animation-delay: 0s;
				animation-duration: 5s;
				animation-iteration-count: infinite;
				animation-name: snow-flake-vertical-animation;
				animation-timing-function: linear;
				left: 0px;
				position: absolute;
				top: 0px;
			}
			.horizontal-track {
				animation-duration: 3s;
				animation-iteration-count: infinite;
				animation-name: snow-flake-horizontal-animation;
				animation-timing-function: ease-in-out;
				left: 0px;
				position: absolute;
				top: 0px;
			}
			.flake {
				background-color: #ffffff;
				border-radius: 20px 20px 20px 20px;
				display: block;
				height: 5px;
				left: 0px;
				position: absolute;
				top: 0px;
				width: 5px;
			}
			@keyframes snow-flake-vertical-animation {
				from {
					top: 0%;
				}
				to {
					top: 100%;
				}
			}
			@keyframes snow-flake-horizontal-animation {
				from {
					left: -20px;
				}
				50% {
					left: 20px;
				}
				to {
					left: -20px;
				}
			}
		`,
	],
})
export class RaxSnowEffect implements OnChanges {
	public depth = 1;
	public speed = 1;

	public flakeOpacity = 1;
	public flakeSize = 1;
	public horizontalDuration = 5;
	public horizontalDelay = 0;
	public verticalDelay = 3;
	public verticalDuration = 0;

	ngOnChanges(): void {
		switch (this.speed) {
			case 1:
				this.verticalDuration = 5;
				this.horizontalDuration = 3;
				break;
			case 2:
				this.verticalDuration = 6;
				this.horizontalDuration = 3;
				break;
			case 3:
				this.verticalDuration = 8;
				this.horizontalDuration = 3.5;
				break;
			case 4:
				this.verticalDuration = 10;
				this.horizontalDuration = 4;
				break;
			case 5:
				this.verticalDuration = 15;
				this.horizontalDuration = 5;
				break;
		}

		/**
		 * @note
		 * Choose a random offset for the animation so that we fill the screen with snow
		 * flakes rather than having them all start together at the top.
		 *
		 */
		this.verticalDelay = Math.random() * -this.verticalDuration;
		this.horizontalDelay = Math.random() * -this.horizontalDuration;

		switch (this.depth) {
			case 1:
				this.flakeSize = 1;
				this.flakeOpacity = 1;
				break;
			case 2:
				this.flakeSize = 2;
				this.flakeOpacity = 1;
				break;
			case 3:
				this.flakeSize = 3;
				this.flakeOpacity = 0.9;
				break;
			case 4:
				this.flakeSize = 5;
				this.flakeOpacity = 0.5;
				break;
			case 5:
				this.flakeSize = 10;
				this.flakeOpacity = 0.2;
				break;
		}
	}
}

@NgModule({
  imports: [CommonModule],
  declarations: [RaxSnowEffect],
  exports: [RaxSnowEffect]
})
export class RaxEffectModule {}
