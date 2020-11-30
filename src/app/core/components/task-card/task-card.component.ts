import { Component, Input, OnInit } from '@angular/core';
import { Period } from '../../model/period.model';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent{

  @Input() task: Task;

  getColor(): string {
    switch(this.task.period){
      case Period.MORNING:
        return '#f1c40f';
      case Period.AFTERNOON:
        return '#3498db';
      case Period.EVENING:
        return '#34495e';
    }
  }

}
