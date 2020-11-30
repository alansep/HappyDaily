import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Period } from '../../model/period.model';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() onSaveTask = new EventEmitter<Task>();

  periods: Period[] = [Period.MORNING, Period.AFTERNOON, Period.EVENING];

  ngOnInit(): void {
  }

  save(form: NgForm): void{
    let task: Task = new Task();
    task.name = form.value.name;
    task.period = form.value.period;
    task.description = form.value.description;
    this.onSaveTask.emit(task);
    form.resetForm();
  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }

}
