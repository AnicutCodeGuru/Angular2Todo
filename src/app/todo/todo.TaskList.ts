import { Component } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'task-list',
  templateUrl: `./tasklist.html`,
})


export class TaskList  { 
    taskList:Todo[] = [];

    newTask:Todo;

    constructor(){
        this.newTask = new Todo("","")
        this.taskList.push(new Todo("Buy Sugar","Pending"));
        this.taskList.push(new Todo("Buy Wheat","Pending"));
        this.taskList.push(new Todo("Buy Water","Pending"));
    }

    completeTask(task:Todo){
        task.taskStatus="Completed";
    }

    deleteTask(index:number){
        this.taskList.splice(index,1)
    }

    addTask(){
        var newTask=new Todo(this.newTask.taskName, "Pending");
        this.taskList.push(newTask);

        this.newTask.taskName="";
    }
}
