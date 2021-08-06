import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaxAvatarModule } from 'src/components';
import { RaxColorsModule } from 'src/common/colors';
import { NeofetchComponent } from './neofetch.component';

@NgModule({
  declarations: [NeofetchComponent],
  imports: [
    CommonModule,
    RaxColorsModule,
    RaxAvatarModule,
  ],
  exports: [
    NeofetchComponent,
  ]
})
export class NeofetchModule { }
