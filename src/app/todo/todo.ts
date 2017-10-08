export class Todo{
    taskName:string;
    taskStatus:string;
    hide:Boolean;
    _id:string;
    
    constructor(taskName:string,taskStatus:string,_id:string){
        this.taskName=taskName;
        this.taskStatus=taskStatus;
        this.hide=true;
        this._id=_id;
    }

    toggleHide(){
        this.hide=!this.hide;
    }
}