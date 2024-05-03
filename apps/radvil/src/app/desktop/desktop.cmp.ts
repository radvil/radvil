import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  signal,
  type OnInit,
} from "@angular/core";
import {
  UiDesktopPanelCmp,
  UiDockPanelCmp,
  UiDockPanelItemCmp,
  UiDockPanelService,
  UiDraggable,
  UiGradientBgCmp,
  UiSnowFlakeParticleCmp,
  UiWindowCmp,
  UiWindowContentCmp,
  UiWindowHeaderCmp,
  type UiSnowFlakeParticleConfig,
  type UiWindowConfig,
} from "@neo/ui";
import { NeofetchCmp } from "../neofetch/neofetch.cmp";

@Component({
  standalone: true,
  selector: "rad-desktop",
  styleUrl: "./desktop.cmp.scss",
  templateUrl: "./desktop.cmp.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    UiDraggable,
    UiWindowCmp,
    UiWindowHeaderCmp,
    UiWindowContentCmp,
    NeofetchCmp,
    UiDockPanelCmp,
    UiDockPanelItemCmp,
    UiGradientBgCmp,
    UiDesktopPanelCmp,
    UiSnowFlakeParticleCmp,
  ],
})
export class DesktopCmp implements OnInit {
  readonly wallpaper = signal("url(assets/images/background.jpg)");
  readonly dock = inject(UiDockPanelService);
  readonly appDockItems$ = this.dock.getDefaultItems();
  public snowFlakesConfigs!: UiSnowFlakeParticleConfig[];
  public appWindows: UiWindowConfig[] = [
    {
      windowId: "neofetch",
      windowTitle: "~:bash~ neofetch",
    },
  ];

  @HostBinding("style.background-image")
  get bgImage() {
    return this.wallpaper();
  }

  private generateSnowFlakeConfigs(): void {
    const configs: UiSnowFlakeParticleConfig[] = [];
    for (let i = 1; i <= 77; i++) {
      configs.push({
        depth: this.randomRange(1, 5),
        left: this.randomRange(0, 100),
        speed: this.randomRange(1, 5),
      });
    }

    this.snowFlakesConfigs = [...configs];
  }

  private randomRange(min: number, max: number): number {
    const range = max - min;
    return min + Math.round(Math.random() * range);
  }

  ngOnInit(): void {
    this.generateSnowFlakeConfigs();
  }
}
