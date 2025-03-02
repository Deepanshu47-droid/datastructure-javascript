// Initialize dictionary to store months
let birthMonths = {
    "January": [],
    "February": [],
    "March": [],
    "April": [],
    "May": [],
    "June": [],
    "July": [],
    "August": [],
    "September": [],
    "October": [],
    "November": [],
    "December": []
};

const months = Object.keys(birthMonths);

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let randomMonth = months[Math.floor(Math.random() * 12)];
    birthMonths[randomMonth].push("Person " + i);
}

// Display individuals with same birth month
for (let month in birthMonths) {
    if (birthMonths[month].length > 0) {
        console.log(month + ": " + birthMonths[month].join(", "));
    }
}
