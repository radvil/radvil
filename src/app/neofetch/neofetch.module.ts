import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	RaxColorsModule,
	RaxAvatarModule,
	RaxWindowModule,
} from '@rax/materials';

import { NeofetchComponent } from './neofetch.component';

@NgModule({
	declarations: [NeofetchComponent],
	imports: [CommonModule, RaxColorsModule, RaxAvatarModule, RaxWindowModule],
	exports: [NeofetchComponent],
})
export class NeofetchModule {}
