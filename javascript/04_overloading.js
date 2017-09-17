function add(){    // Variadic  function 
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

var values=[1,2,3,4,5,6,7,8]

console.log(add(1,2,3,6));
console.log(add.apply(null,values));