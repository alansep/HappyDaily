import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';
import { ProjectModule } from '../../common/project.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    ProjectModule,
    FormsModule
  ],
  exports: [
    TaskFormComponent
  ]
})
export class TaskFormModule { }
