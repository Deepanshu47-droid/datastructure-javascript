function findRepeatedDigits() {
    let repeatedDigits = [];
    for (let i = 1; i <= 100; i++) {
        let str = i.toString();
        if (str[0] === str[1]) {
            repeatedDigits.push(i);
        }
    }
    console.log("Repeated Digits:", repeatedDigits);
}

findRepeatedDigits();
