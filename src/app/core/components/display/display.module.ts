import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import {MatCardModule} from '@angular/material/card';
import { ProjectModule } from '../../common/project.module';
import { TaskCardModule } from '../task-card/task-card.module';
import {ClipboardModule} from '@angular/cdk/clipboard';

@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ProjectModule,
    TaskCardModule,
    ClipboardModule
  ],
  exports: [DisplayComponent]
})
export class DisplayModule { }
