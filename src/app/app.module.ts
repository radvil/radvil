import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './_core/core.module';

import { RadWindowModule } from './_shared/components';
import { AppComponent } from './app.component';
import { NeofetchModule } from './neofetch/neofetch.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RadWindowModule,
    NeofetchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
