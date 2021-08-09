import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaxWindow } from './window.component';
import { RaxWindowHeader } from './window-header.component';
import { RaxWindowService } from './window.service';
import { RaxWindowContent } from './window-content.component';

@NgModule({
	imports: [CommonModule],
	declarations: [RaxWindow, RaxWindowHeader, RaxWindowContent],
	exports: [RaxWindow, RaxWindowHeader, RaxWindowContent],
  providers: [RaxWindowService],
})
export class RaxWindowModule {}
