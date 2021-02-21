import { NgModule } from '@angular/core';

import { RadBgColorDirective } from './directives/colors/bg.directive';
import { RadColorDirective } from './directives/colors/color.directive';
import { RadTooltipDirective } from './directives/tooltip/tooltip.directive';
import { RadResizableDirective } from './directives/resizable/resizable.directive';

@NgModule({
  declarations: [
    RadTooltipDirective,
    RadColorDirective,
    RadBgColorDirective,
    RadResizableDirective,
  ],
  exports: [
    RadTooltipDirective,
    RadColorDirective,
    RadBgColorDirective,
    RadResizableDirective,
  ],
})
export class RadCommonModule {}
