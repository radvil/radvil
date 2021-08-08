import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RaxSnowEffect } from "./snow-flake.component";

@NgModule({
	imports: [CommonModule],
	declarations: [RaxSnowEffect],
	exports: [RaxSnowEffect],
})
export class RaxEffectModule {}
