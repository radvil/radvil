import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { CoreModule } from './_core/core.module';
import { RadDockModule, RadWindowModule } from './_shared/components';
import { AppComponent } from './app.component';
import { NeofetchModule } from './neofetch/neofetch.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    RadWindowModule,
    RadDockModule,
    NeofetchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
