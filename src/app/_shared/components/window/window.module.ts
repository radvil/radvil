import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadWindow } from './window.component';
import { RadWindowHeader } from './window-header/window-header.component';

@NgModule({
  declarations: [RadWindow, RadWindowHeader],
  imports: [
    CommonModule
  ],
  exports: [RadWindow, RadWindowHeader],
})
export class RadWindowModule { }
