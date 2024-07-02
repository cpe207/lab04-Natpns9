function primeNumber(a) {
  let results = [];
    for (let num of a) {
        if (num >= 10) {
            results.push("YES");
        } else {
            results.push("NO");
        }
    }
    return results;
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
