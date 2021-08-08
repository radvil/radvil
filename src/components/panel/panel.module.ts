import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RaxPanel } from "./panel.component";

@NgModule({
  imports: [CommonModule],
  declarations: [RaxPanel],
  exports: [RaxPanel],
})
export class RaxPanelModule {}
