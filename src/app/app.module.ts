import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/core/core.module';
import { RaxWindowModule, RaxDockModule } from 'src/components';
import { RaxDraggableModule, RaxResizableModule } from 'src/common';
import { AppComponent } from './app.component';
import { NeofetchModule } from './neofetch/neofetch.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CommonModule,

		CoreModule,
		RaxDockModule,
		NeofetchModule,
		RaxWindowModule,
    RaxResizableModule,
    RaxDraggableModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
