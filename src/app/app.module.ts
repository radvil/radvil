import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RaxShellModule } from '@rax/materials';

import { CoreModule } from 'src/core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,

		CoreModule,
		RaxShellModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
