import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaxShell } from './rax-shell.component';

@NgModule({
	imports: [CommonModule],
	declarations: [RaxShell],
  exports: [RaxShell],
})
export class RaxShellModule {}
