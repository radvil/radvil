import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
	RaxDockModule,
	RaxPanelModule,
	RaxThemeModule,
	RaxWindowModule,
  RaxEffectModule,
	RaxResizableModule,
	RaxDraggableModule,
} from '@rax/materials';

import { NeofetchModule } from '../neofetch/neofetch.module';
import { DesktopComponent } from './desktop.component';

const routes: Routes = [
	{
		path: '',
		component: DesktopComponent,
		data: { title: 'Rax Desktop' },
	},
];

@NgModule({
	declarations: [DesktopComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),

		RaxThemeModule.forRoot(),
		RaxDockModule,
		RaxPanelModule,
		RaxWindowModule,
		RaxResizableModule,
		RaxDraggableModule,
		RaxEffectModule,
		NeofetchModule,
	],
})
export class DesktopModule {}
