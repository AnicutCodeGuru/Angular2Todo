import { Component } from '@angular/core';
import {Todo} from "./todo";
import {TodoService} from "./srvc.todo";


@Component({
  selector: 'task-list',
  templateUrl: `./tasklist.html`,
})


export class TaskList  { 
    taskList:Todo[] = [];

    newTask:Todo;

    constructor(private todoSrvc:TodoService){

        this.newTask = new Todo("","","")
        this.getTaskList();
    }

    completeTask(task:Todo){
        task.taskStatus="Completed";
        this.todoSrvc.updateTask(task).subscribe(data => {
            alert(data.msg);
            this.getTaskList();
        });
    }

    deleteTask(task:Todo){
        //this.taskList.splice(index,1)
        this.todoSrvc.deleteTask(task).subscribe(data => {
            alert(data.msg);
            this.getTaskList();
        });;
    }

    addTask(){
        this.todoSrvc.createTask(new Todo(this.newTask.taskName,"Pending","")).subscribe(data => {
            alert(data.msg);
            this.newTask.taskName=""
            this.getTaskList();
        });

        

        this.newTask.taskName="";
    }

    getTaskList=()=>{
        this.taskList=[];
        this.todoSrvc.getTaskList().subscribe(data => {
            for(var i=0;i<data.length;i++){
                this.taskList.push(new Todo(data[i].taskName,data[i].taskStatus,data[i]._id) );
            }
        });

    }

    
}
