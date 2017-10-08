import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Todo } from "./Todo";

@Injectable()
export class TodoService {
    constructor(
        private http: Http
    ) { }

    createTask(taskDetl: Todo) {
        console.log(taskDetl);
        return this.http.post("http://localhost:9000/todoCreate", taskDetl)
            .map((res: Response) => res.json());
    }

    getTaskList() {
        return this.http.get("http://localhost:9000/todoList")
            .map((res: Response) => res.json());
    }
   
    updateTask(taskDetl: Todo) {
        return this.http.post("http://localhost:9000/todoUpdate", taskDetl)
            .map((res: Response) => res.json());
    }

    deleteTask(taskDetl:Todo) {
        return this.http.post("http://localhost:9000/todoDelete",taskDetl)
        .map((res:Response) => res.json());
      }




}