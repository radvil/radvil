import { NgModule } from '@angular/core';
import { RadBgColorDirective } from './directives/colors/bg.directive';
import { RadColorDirective } from './directives/colors/color.directive';
import { RadTooltipDirective } from './directives/tooltip/tooltip.directive';

@NgModule({
  declarations: [RadTooltipDirective, RadColorDirective, RadBgColorDirective],
  exports: [RadTooltipDirective, RadColorDirective, RadBgColorDirective],
})
export class RadCommonModule { }
