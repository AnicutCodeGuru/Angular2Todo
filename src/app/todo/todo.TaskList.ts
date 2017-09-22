import { Component } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'task-list',
  templateUrl: `./tasklist.html`,
})


export class TaskList  { 
    taskList:Todo[] = [];

    constructor(){
        this.taskList.push(new Todo("Buy Sugar","Pending"));
        this.taskList.push(new Todo("Buy Wheat","Pending"));
        this.taskList.push(new Todo("Buy Water","Pending"));
    }

    completeTask(task:Todo){
        task.taskStatus="Completed";
    }

    deleteTask(index:number){
        alert(1);    
        this.taskList.splice(index,1)
    }
}
