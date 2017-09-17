function Person(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

Person.prototype.getName=function(){
    return this.firstName+" "+this.lastName;
}


var ravi = new Person("Ravi","Reddy" ,20);;
console.log(ravi.firstName);
console.log(ravi.getName());
console.log(ravi);

var kiran = new Person("Kiran","Katakam" ,24);;
console.log(kiran.firstName);
console.log(kiran.getName());
console.log(kiran);


function Employee(firstName,lastName,age,empID,Salary){
    Person.call(this,firstName,lastName,age);

    this.empID=empID;
    this.Salary=Salary;
}

for(var fn in Person.prototype){
   Employee.prototype[fn] = Person.prototype[fn];
}

var emp1 = new Employee("Ragu","Mandyam",25,1001,25000);
console.log(emp1);
console.log(emp1.getName());

