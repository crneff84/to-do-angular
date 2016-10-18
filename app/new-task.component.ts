import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Select a Task Category:</label>
      <select #newCategory>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Hobby">Hobby</option>
      </select>
    </div>
    <div>
      <label>Enter Task Priority:</label>
      <select #newPriority>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
      <button (click)="
        addClicked(newDescription.value, newCategory.value, newPriority.value, newId.value);
        newDescription.value='';
        newCategory.value='';
        newPriority.value='';
        newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, category: string, priority: string, id: number) {
    var newTaskToAdd: Task = new Task(description, category, priority, id);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
