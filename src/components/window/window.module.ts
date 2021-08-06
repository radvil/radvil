import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaxWindow } from './window.component';
import { RaxWindowHeader } from './window-header.component';
import { RaxWindowService } from './window.service';

@NgModule({
	imports: [CommonModule],
	declarations: [RaxWindow, RaxWindowHeader],
	exports: [RaxWindow, RaxWindowHeader],
  providers: [RaxWindowService],
})
export class RaxWindowModule {}
