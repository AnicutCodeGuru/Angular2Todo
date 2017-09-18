function add(...values:number[]){
      var sum:number = 0;

      for(let i=0; i<values.length;i++){
          sum=sum+values[i];
      }

      return sum;
}

var result=add(1,2,3,4);
var result2=add.apply(null,[1,2,3,4]);
console.log(result, result2); 