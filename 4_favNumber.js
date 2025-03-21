// Coding Problem 4: Favorite Number Calculation
let favNumber = 5; // Favorite number
// Using while loop
while (true) { // It will ask the user until it guess the number
    guess = parseInt(prompt("Guess my favorite number: "));

    if (guess === favNumber) {
        console.log("Correct");
        break;
    } else if (guess > favNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}; // Output: (6)Too high
   //         (4)Too low 
   //         (5)Correct