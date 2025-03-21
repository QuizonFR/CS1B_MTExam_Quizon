// Coding Problem 1: User Information Collection
// The user will input the following information: Full Name, Age, Favorite Number, and Favorite Color
let user = { // Creating object to easily print the ouput rather than typing (4) console.log
    fullName: prompt("Enter your first and last name: "),
    age: prompt("Enter your age: "),
    favNumber: prompt("Enter your favorite number: "),
    favColor: prompt("Enter your favorite color: ")
};
console.log(user); // Output: {fullName: 'FR Quizon', age: '18', favNumber: '5', favColor: 'Black'}