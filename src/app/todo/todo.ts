export class Todo{
    taskName:string;
    taskStatus:string;
    hide:Boolean;
    
    constructor(taskName:string,taskStatus:string){
        this.taskName=taskName;
        this.taskStatus=taskStatus;
        this.hide=true;
    }

    toggleHide(){
        this.hide=!this.hide;
    }
}