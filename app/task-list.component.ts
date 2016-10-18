import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
      <label>Select Completeness of Tasks</label>
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all">Show All</option>
        <option value="isDone">Show Done</option>
        <option value="notDone" selected="selected">Show Not Done</option>
      </select><br>
      <label>Select Category of Tasks</label>
      <select (change)="withChange($event.target.value)" class="filter">
        <option value="All" selected="selected">All</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
        </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority">
      <task-display [task]="currentTask"></task-display>
      <button class="btn btn-success" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  public selectedPriority: string = "";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  withChange(optionFromMenu) {
    this.selectedPriority = optionFromMenu;
  }
}
