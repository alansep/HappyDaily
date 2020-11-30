import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { DisplayModule } from './display/display.module';
import { MagicCardModule } from './magic-card/magic-card.module';
import { TaskCardModule } from './task-card/task-card.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    MagicCardModule,
    TaskCardModule
  ],
  exports: [
    NavbarModule,
    DisplayModule,
    MagicCardModule,
    TaskCardModule
  ]
})
export class ComponentsModule { }
