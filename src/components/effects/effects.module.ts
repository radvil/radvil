import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RaxSnowFlake } from "./snow-flake.component";

@NgModule({
	imports: [CommonModule],
	declarations: [RaxSnowFlake],
	exports: [RaxSnowFlake],
})
export class RaxEffectModule {}
