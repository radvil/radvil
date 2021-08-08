import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	RaxColorsModule,
	RaxAvatarModule,
	RaxWrapperModule,
} from '@rax/materials';

import { NeofetchComponent } from './neofetch.component';

@NgModule({
	declarations: [NeofetchComponent],
	imports: [CommonModule, RaxColorsModule, RaxAvatarModule, RaxWrapperModule],
	exports: [NeofetchComponent],
})
export class NeofetchModule {}
