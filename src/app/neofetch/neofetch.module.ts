import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadAvatarModule } from '../_shared/components';
import { RadCommonModule } from '../_shared/common.module';
import { NeofetchComponent } from './neofetch.component';

@NgModule({
  declarations: [NeofetchComponent],
  imports: [
    CommonModule,
    RadCommonModule,
    RadAvatarModule,
  ],
  exports: [
    NeofetchComponent,
  ]
})
export class NeofetchModule { }
