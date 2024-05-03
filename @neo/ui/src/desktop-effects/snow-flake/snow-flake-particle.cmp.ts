/**
 * @originalAuthor https://github.com/bennadel
 *
 */
import { ChangeDetectionStrategy, OnChanges } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  inputs: ["depth", "speed"],
  selector: "ui-snow-flake-particle",
  styleUrl: "./show-flake-particle.cmp.scss",
  templateUrl: "./snow-flake-particle.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSnowFlakeParticleCmp implements OnChanges {
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
