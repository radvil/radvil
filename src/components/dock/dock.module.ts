import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaxDock } from './dock.component';
import { RaxDockItem } from './dock-item/dock-item.component';
import { RaxDockService } from './dock.service';

@NgModule({
	imports: [CommonModule],
	declarations: [RaxDock, RaxDockItem],
	exports: [RaxDock, RaxDockItem],
	providers: [RaxDockService],
})
export class RaxDockModule {}
