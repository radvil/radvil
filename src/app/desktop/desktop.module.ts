import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import {
  RaxDockModule,
  RaxPanelModule,
  RaxThemeModule,
  RaxWindowModule,
  RaxEffectModule,
  RaxDraggableModule,
  RaxColorsModule,
} from "@rax/materials";

import { NeofetchModule } from "../neofetch/neofetch.module";
import { DesktopComponent } from "./desktop.component";

const routes: Routes = [
  {
    path: "",
    component: DesktopComponent,
    data: { title: "Rax Desktop" },
  },
];

@NgModule({
  declarations: [DesktopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // TODO: Move to core
    RaxThemeModule.forRoot(),
    RaxDockModule,
    RaxPanelModule,
    RaxWindowModule,
    RaxDraggableModule,
    RaxEffectModule,
    RaxColorsModule,
    NeofetchModule,
  ],
})
export class DesktopModule {}
