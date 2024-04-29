import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  signal,
} from "@angular/core";
import {
  RaxDockCmp,
  RaxDockItemCmp,
  RaxDockService,
  RaxDraggable,
  RaxGradientBg,
  RaxPanelCmp,
  RaxSnowFlake,
  RaxSnowFlakeConfig,
  RaxWindowConfig,
} from "@rax/materials";
import { RaxWindowContentCmp } from "src/components/window/window-content.cmp";
import { RaxWindowHeaderCmp } from "src/components/window/window-header.cmp";
import { RaxWindowCmp } from "src/components/window/window.cmp";
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
    RaxSnowFlake,
    RaxDockCmp,
    RaxDockItemCmp,
    RaxPanelCmp,
    RaxDraggable,
    RaxGradientBg,
    RaxWindowCmp,
    RaxWindowHeaderCmp,
    RaxWindowContentCmp,
    NeofetchCmp,
  ],
})
export class DesktopCmp implements OnInit {
  public appDockItems$ = this.dock.getDefaultItems();
  public snowFlakesConfigs!: RaxSnowFlakeConfig[];
  public directions = ["n", "s", "w", "e", "se"];
  public appWindows: RaxWindowConfig[] = [
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
    const configs: RaxSnowFlakeConfig[] = [];
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

  constructor(private dock: RaxDockService) {}
}
