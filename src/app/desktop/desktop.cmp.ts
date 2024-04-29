import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  signal,
} from "@angular/core";
import {
  UiDraggable,
  UiDockPanelCmp,
  UiDockPanelItemCmp,
  UiGradientBgCmp,
  UiDesktopPanelCmp,
  UiSnowFlakeParticleCmp,
  UiSnowFlakeParticleConfig,
  UiWindowConfig,
  UiWindowContentCmp,
  UiWindowHeaderCmp,
  UiWindowCmp,
  UiDockPanelService,
} from "@radvil/ui";
import { NeofetchCmp } from "../neofetch/neofetch.cmp";

@Component({
  standalone: true,
  selector: "rax-desktop",
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
  public appDockItems$ = this.dock.getDefaultItems();
  public snowFlakesConfigs!: UiSnowFlakeParticleConfig[];
  public directions = ["n", "s", "w", "e", "se"];
  public appWindows: UiWindowConfig[] = [
    {
      windowId: "neofetch",
      windowTitle: "~:bash~ neofetch",
    },
  ];

  readonly wallpaper = signal("url(assets/images/background.jpg)");

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

  constructor(private dock: UiDockPanelService) {}
}
