// Coding Problem 6: The Grocery List
const ask = prompt("Create a grocery list (y/n): ").toLowerCase(); // Ask the user to create a list
// Using conditional statement
if (ask === "y") {
    let list = []; // Create an empty array containing the lists of prompted items
    let items = parseInt(prompt("Enter the number of items to be added to the list:")); // It will ask how many items
    for (let i = 0; i < items; i++) {
        let item = prompt(`Enter item ${i+1}:`); // It will ask the user's item needs
        list.push(item); // It will add the item to the list
    }
    let groceryList_Sort = [...list].sort(); // This will sort the items
    let groceryList_Reverse = [...groceryList_Sort].reverse(); // It will sort but in reverse
    alert(`Sorted List: ${groceryList_Sort}`);
    alert(`Reversed List: ${groceryList_Reverse}`);
} else {
    console.log("Re-run the program to create a grocery list")
} 
// Input: (3) Peach, Apple, Orange
// Output/Alert:
//          Sorted List: Apple,Orange,Peach
//          Reversed List: Peach,Orange,Apple