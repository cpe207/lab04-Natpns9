function primeNumber(a) {
    var results = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var num = a_1[_i];
        if (num >= 10) {
            results.push("YES");
        }
        else {
            results.push("NO");
        }
    }
    return results;
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
