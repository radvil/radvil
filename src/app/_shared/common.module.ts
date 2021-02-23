import { NgModule } from '@angular/core';

import { RadBgColorDirective } from './directives/colors/bg.directive';
import { RadColorDirective } from './directives/colors/color.directive';
import { RadTooltipDirective } from './directives/tooltip/tooltip.directive';
import { RadResizableDirective } from './directives/resizable/resizable.directive';
import { RadDraggableDirective } from './directives/resizable/draggable.directive';

@NgModule({
  declarations: [
    RadTooltipDirective,
    RadColorDirective,
    RadBgColorDirective,
    RadResizableDirective,
    RadDraggableDirective,
  ],
  exports: [
    RadTooltipDirective,
    RadColorDirective,
    RadBgColorDirective,
    RadResizableDirective,
    RadDraggableDirective,
  ],
})
export class RadCommonModule {}
