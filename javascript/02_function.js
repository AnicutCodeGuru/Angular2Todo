function add(a,b){
    return a+b;
}

console.log(add.length);

console.log(add(1,2));
console.log(add.call(null,2,3));
console.log(add.apply(null,[2,3]));

