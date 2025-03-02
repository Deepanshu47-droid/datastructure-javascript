// Initialize the dictionary to store counts
let dieRolls = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// Roll the die until any number reaches 10 times
while (true) {
    let roll = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
    dieRolls[roll]++;

    if (dieRolls[roll] === 10) {
        break;
    }
}

console.log("Die Roll Results:", dieRolls);

// Find maximum and minimum occurrence
let maxNum = 1, minNum = 1;
for (let num in dieRolls) {
    if (dieRolls[num] > dieRolls[maxNum]) {
        maxNum = num;
    }
    if (dieRolls[num] < dieRolls[minNum]) {
        minNum = num;
    }
}

console.log("Number with Maximum Rolls:", maxNum, "=>", dieRolls[maxNum], "times");
console.log("Number with Minimum Rolls:", minNum, "=>", dieRolls[minNum], "times");
