import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadAvatar } from './avatar.component';
import { RadAvatarDirective } from './avatar.directive';
import { RadColorsModule } from '../../directives';

@NgModule({
  declarations: [RadAvatar, RadAvatarDirective],
  imports: [CommonModule, RadColorsModule],
  exports: [RadAvatar, RadAvatarDirective]
})
export class RadAvatarModule { }
