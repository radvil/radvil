import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { RaxLogo } from './logo/logo.component';

@NgModule({
	imports: [CommonModule],
	declarations: [RaxLogo],
	exports: [RaxLogo],
})
export class RaxThemeModule {
	static forRoot(): ModuleWithProviders<RaxThemeModule> {
		return {
			ngModule: RaxThemeModule,
			providers: [],
		};
	}
}
