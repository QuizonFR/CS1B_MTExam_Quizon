// Coding Problem 5: Color Preferences
let favColors = []; // Create an empty array that stores the favorite color
// Using for loop to ask the user their 3 favorite color
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter color: "); // Prompt user the favorite color
    favColors.push( color); // Add the color to an empty array
    console.log(`Updated color list: ${favColors}`); // Print the updated array
}; // Output: Updated color list: Black
           // Updated color list: Black,White
           // Updated color list: Black,White,Gray / Grey