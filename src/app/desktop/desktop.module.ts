import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RaxDockModule, RaxPanelModule, RaxThemeModule, RaxWindowModule } from 'src/components';
import { RaxEffectModule } from 'src/components/effects';
import { RaxDraggableModule, RaxResizableModule } from 'src/common';
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
