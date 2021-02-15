import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadAvatarModule } from '../_shared/components';
import { RadColorsModule } from '../_shared/directives'; // why should import ?
import { NeofetchComponent } from './neofetch.component';

@NgModule({
  declarations: [NeofetchComponent],
  imports: [
    CommonModule,
    RadColorsModule,
    RadAvatarModule,
  ],
  exports: [
    NeofetchComponent,
  ]
})
export class NeofetchModule { }
