import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadDockComponent } from './dock.component';
import { RadDockItemComponent } from './dock-item/dock-item.component';
import { RadDockService } from './dock.service';
import { RadDockDirective } from './dock.directive';
import { RadCommonModule } from '../../common.module';


@NgModule({
  declarations: [RadDockComponent, RadDockItemComponent, RadDockDirective],
  imports: [CommonModule, RadCommonModule],
  exports: [RadDockComponent, RadDockItemComponent, RadDockDirective],
  providers: [RadDockService],
})
export class RadDockModule { }
