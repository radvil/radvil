import { NgModule } from '@angular/core';

import { RaxColorBackground, RaxColorTypography } from './colors.directive';

@NgModule({
	declarations: [RaxColorBackground, RaxColorTypography],
	exports: [RaxColorBackground, RaxColorTypography],
})
export class RaxColorsModule {}
