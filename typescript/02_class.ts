export class Person{
   firstName:String;
   lastName:String;
   age:Number;

   constructor(firstName:String, lastName:String, age:Number){
       this.firstName=firstName;
       this.lastName=lastName;
       this.age=age;
   }

   getName(){
       return this.firstName+" "+this.lastName;
   }

}