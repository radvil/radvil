import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadCommonModule } from '../../common.module';
import { RadAvatarComponent } from './avatar.component';
import { RadAvatarDirective } from './avatar.directive';

@NgModule({
  declarations: [RadAvatarComponent, RadAvatarDirective],
  imports: [CommonModule, RadCommonModule],
  exports: [RadAvatarComponent, RadAvatarDirective]
})
export class RadAvatarModule { }
