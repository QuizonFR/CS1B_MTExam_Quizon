// Coding Problem 3: User Age Categorization
let age = prompt("Enter your age:"); // Create a variable that ask the user's age
// Create a conditional statements with the following categories:
if (age < 5) {
    console.log("Toddler");
} else if (age >= 5 && age <= 12) {
    console.log("Child")
} else if (age >= 13 &&  age <= 19) {
    console.log("Teenager")
} else if (age >= 20 && age <= 35) {
    console.log("Young Adult")
} else if (age >= 36 && age <= 60) {
    console.log("Middle-Aged")
} else {
    console.log("Senior")
};
// The output will be based on the user's prompted age