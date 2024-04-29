import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  RaxDockService,
  RaxWindowConfig,
  RaxSnowFlakeConfig,
} from "@rax/materials";

@Component({
  selector: "rax-desktop",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .rax-desktop {
        width: 100svw;
        height: 100svh;
        overflow: hidden;
        background-color: #333;
        background-size: cover;
      }
    `,
  ],
  template: `
    <div
      [style.background-image]="'url(assets/images/background.jpg)'"
      class="rax-desktop"
    >
      <rax-panel>
        <rax-logo></rax-logo>
      </rax-panel>

      <ng-container *ngFor="let app of appWindows; index as i">
        <ng-container
          [ngTemplateOutlet]="defaultAppTemplate"
          [ngTemplateOutletContext]="{ $implicit: app, index: i }"
        ></ng-container>
      </ng-container>

      <ng-template #defaultAppTemplate let-app let-index="i">
        <rax-window raxDraggable windowType="terminal">
          <rax-window-header raxColorBg="transparent">
            {{ app.windowTitle || "~:bash~ konsole" }}
          </rax-window-header>

          <rax-window-content>
            <rax-neofetch></rax-neofetch>
          </rax-window-content>
        </rax-window>
      </ng-template>

      <!-- dock app -->
      <rax-dock raxDockRound="1rem" dockTheme="dark">
        <rax-dock-item
          *ngFor="let item of appDockItems$ | async"
          [dockItem]="item"
          [isActive]="item.isActive"
          [isDarken]="item.isDarken"
        ></rax-dock-item>
      </rax-dock>

      <!-- snowflake desktop effect -->
      <ng-template
        ngFor
        let-config
        [ngForOf]="snowFlakesConfigs"
        [ngForTrackBy]="trackByFn"
      >
        <rax-snow-flake
          [depth]="config.depth"
          [speed]="config.speed"
          [style.left.vw]="config.left"
        ></rax-snow-flake>
      </ng-template>
    </div>
  `,
})
export class DesktopComponent {
  constructor(private dock: RaxDockService) {
    this.generateSnowFlakeConfigs();
  }

  public appDockItems$ = this.dock.getDefaultItems();
  public directions = ["n", "s", "w", "e", "se"];
  public appWindows: RaxWindowConfig[] = [
    {
      windowId: "neofetch",
      windowTitle: "~:bash~ neofetch",
    },
  ];
  public snowFlakesConfigs!: RaxSnowFlakeConfig[];

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

  trackByFn(index: number) {
    return index;
  }
}
