import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormModule } from './task-form/task-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskFormModule
  ],
  exports: [
    TaskFormModule
  ]
})
export class MyFormsModule { }
