import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>To-Do List</h1>
    </div>
    <div class="row">
      <div class="col-md-4">
        <task-list
          [childTaskList]="masterTaskList"
          (clickSender)="showDetails($event)"
         ></task-list>
      </div>
      <div class="col-md-4 offset-md-4">
        <edit-task
          [childSelectedTask]="selectedTask"
          (doneClickedSender)="finishedEditing()"
        ></edit-task>
        <new-task
          (newTaskSender)="addTask($event)"
        ></new-task>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", "Home", "High", 0),
      new Task("Learn Kung Fu.", "Home", "High", 1),
      new Task("Rewatch all the Lord of the Rings movies.", "Home", "Low", 2),
      new Task("Do the laundry.", "Work", "High", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
