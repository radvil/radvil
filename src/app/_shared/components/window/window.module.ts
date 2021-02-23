import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadWindow } from './window.component';
import { RadWindowHeader } from './window-header/window-header.component';
import { RadDragNResizeModule } from '../../directives/resizable/dragnresize.module';

@NgModule({
  declarations: [RadWindow, RadWindowHeader],
  imports: [
    CommonModule,
    RadDragNResizeModule
  ],
  exports: [RadWindow, RadWindowHeader],
})
export class RadWindowModule { }
