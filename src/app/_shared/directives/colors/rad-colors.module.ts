import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadColorDirective } from './color.directive';
import { RadBgColorDirective } from './bg.directive';


@NgModule({
  declarations: [RadColorDirective, RadBgColorDirective],
  imports: [
    CommonModule
  ],
  exports: [RadColorDirective, RadBgColorDirective],
})
export class RadColorsModule { }
