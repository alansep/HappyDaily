import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicCardComponent } from './magic-card.component';



@NgModule({
  declarations: [MagicCardComponent],
  imports: [
    CommonModule
  ],
  exports: [MagicCardComponent]
})
export class MagicCardModule { }
