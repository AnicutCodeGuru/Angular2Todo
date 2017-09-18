function add() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum = sum + values[i];
    }
    return sum;
}
var result = add(1, 2, 3, 4);
var result2 = add.apply(null, [1, 2, 3, 4]);
console.log(result, result2);
