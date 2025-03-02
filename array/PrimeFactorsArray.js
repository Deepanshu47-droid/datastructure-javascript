const readlineSync = require('readline-sync');

function findPrimeFactors(n) {
    let factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }
    return factors;
}

let n = parseInt(readlineSync.question("Enter a number: "));
let factors = findPrimeFactors(n);
console.log(`Prime factors of ${n} are:`, factors);
