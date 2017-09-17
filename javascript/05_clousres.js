/**
 * CLouser is an approach in javascript where state of a function is retained
 * in the memory even after its excution.
 */


 function abc(){
      var a =10;
      return  function(){
          return a;
      }
 }

 var ref = abc()
console.log(ref());


function createCounter(incrementBy){
     var count=0;
     return function(){
        
        count+=incrementBy;
        return count;

     } 

}


var incrementBy1 = createCounter(1);
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());
console.log(incrementBy1());

var incrementBy2 = createCounter(2);
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());
console.log(incrementBy2());

var incrementBy10 = createCounter(10);
console.log(incrementBy10());
console.log(incrementBy10());
console.log(incrementBy10());
console.log(incrementBy10());
console.log(incrementBy10());
