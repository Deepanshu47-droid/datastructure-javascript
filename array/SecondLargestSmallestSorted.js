// Generate 10 random 3-digit numbers
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}

// Display the original array
console.log("Original Array:", randomNumbers);

// Sort the array
randomNumbers.sort((a, b) => a - b);

// Display the sorted array
console.log("Sorted Array:", randomNumbers);

// Find second smallest and second largest
console.log("Second Smallest:", randomNumbers[1]);
console.log("Second Largest:", randomNumbers[randomNumbers.length - 2]);
