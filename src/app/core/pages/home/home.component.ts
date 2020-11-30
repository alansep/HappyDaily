import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  public updateDisplay($event: Task): void {
    this.task = $event;
  }

}
