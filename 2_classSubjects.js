// Coding Problem 2: User Information Collection
// Creating multiple let variables to print out the statements
// The user will fill out the data
let subjectTitle = prompt("Enter your subject title: ");
let classSchedule = prompt("Enter time and days (e.g. 3:00 am, Friday): ");
let classroom = prompt("Enter your classroom: ");
let classInstructor = prompt("Enter instructor's name: ");
let studentName = prompt("Enter student name: ");
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule}
             at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
             // Output: FR Quizon is currently enrolled in DSA with a class schedule of 2:00, Monday
             //         at room CLB. The instructor for the subject is C. Pascua.