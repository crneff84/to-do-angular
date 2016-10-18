import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe ({
  name: "priority",
  pure: false
})

export class PriorityPipe implements PipeTransform {
  transform(input: Task[], desiredPriority) {
    var output: Task[] = [];
    var priority: string;
    if(desiredPriority === "High") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].priority === desiredPriority) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "Medium") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === desiredPriority) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "Low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === desiredPriority) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
