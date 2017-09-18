/**
 * Variable hoisitng
 */
console.log(a);
var a=25;
console.log(a);


/**
 * Data type checking
 *  */

 console.log(typeof a);


/**
 * Datatypes in javascript
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) Null
 * 5) Undefined
 */

 /**
  * COmparision
  */

   var abc = "1";


  if(1=="1"){   // Checks only value. No data type checking
       console.log("Equal")
  }else{
    console.log("UnEqual")
  }

  if(1==="1"){   // Checks  value and data type. Use parseInt method to convert string to number 
       console.log("Equal")
  }else{
    console.log("UnEqual")
  }

   function isPalindrome(str){
      return str.split("").reverse().join("") ===str;
  
    }


   console.log(isPalindrome("LIRIL"))



