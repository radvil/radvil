import { NgModule } from '@angular/core';

import { RadResizableDirective } from './resizable.directive';
import { RadDraggableDirective } from './draggable.directive';

@NgModule({
  declarations: [
    RadResizableDirective,
    RadDraggableDirective,
  ],
  exports: [
    RadResizableDirective,
    RadDraggableDirective,
  ],
})
export class RadDragNResizeModule {}
