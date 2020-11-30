import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() task: Task;

  public tasks = {
    morning: new Array<Task>(),
    afternoon: new Array<Task>(),
    evening: new Array<Task>()
  }

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }
      
  ngOnChanges(): void {
    if(this.task){
      switch(this.task.period){
        case 'Morning':
          this.tasks.morning.push(this.task);
          break;
        case 'Afternoon':
          this.tasks.afternoon.push(this.task);
          break;
        case 'Evening':
          this.tasks.evening.push(this.task);
          break;
      }
    }
  }

  copyToClipboard(){
    this.clipboard.copy(this.generateReport());
    this.snackBar.open('The report has just been copied to clipboard.', 'Dismiss', {
      duration:2500
    })
  }

  generateReport(): string {
    let report: string = '';
    if(this.tasks.morning.length > 0){
      report += 'MORNING\n\n'
      this.tasks.morning.forEach(task => report += task.name + '\n' + task.description + "\n\n")
      report += '\n';
    }
    if(this.tasks.afternoon.length > 0){
      report += 'AFTERNOON\n\n'
      this.tasks.afternoon.forEach(task => report += task.name + '\n' + task.description + "\n\n")
      report += '\n';
    }
    if(this.tasks.evening.length > 0){
      report += 'EVENING\n\n'
      this.tasks.evening.forEach(task => report += task.name + '\n' + task.description + "\n\n");
      report += '\n';
    }
    return report;
  }

}
