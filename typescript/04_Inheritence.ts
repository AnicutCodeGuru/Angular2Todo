import {Person} from "./02_class";

export class Employee extends Person{
    empID:Number;
    employmentType:String;
    bonus:Number;
    constructor(firstName:String,lastName:String,age:number , empID:Number ,employmentType:String="FTE",bonus?:Number){
        super(firstName,lastName,age)
        this.empID=empID;
        this.employmentType=employmentType;
        this.bonus=bonus;
    }
}



var emp1 = new Employee("Vishal","Kumar",23,1001);
console.log(emp1);
