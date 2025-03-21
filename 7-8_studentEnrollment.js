// Coding Problem 7-8: Student Enrollment
// Creating 2 constant arrays
const dSA = []
const webDev = []
// To be inputed in while loop method due to the "return" statement is illegal in "D" at external browser inspect
let run = true;
// Using conditional statements to let the user chose
while (run) {
    // The user will chose the A or B
    let choice = prompt("Select a subject to enroll a student:\nA. DSA\nB. WebDev").toUpperCase();
    if (choice === "A") {
        while (run) {
            // The user will chose the A, B, C, or D
            let choice1 = prompt("Select an option if:\nA. Enroll\nB. Unenroll\nC. Select Another Subject\nD. Exit").toUpperCase();
            if (choice1 === "A") {
                let studName = prompt("Student Name to Enroll (first and last name):"); // The user will prompt the student's name
                dSA.push(studName);
                alert(`The ${studName} has been enrolled.\nList of Student(s):\n${dSA}`);
            } else if (choice1 === "B") {
                let studName = prompt("Student Name to Unenroll:");
                let index = dSA.indexOf(studName);
                if (index !== -1) {
                    dSA.splice(index, 1); // Remove student if found
                }
                alert(`The ${studName} has been unenrolled.\nStudent(s) Currently enrolled:\n${dSA}`);
            } else if (choice1 === "C") {
                break;
            } else {
                alert(`Exiting. Printing the results:\nEnrolled in DSA:\n${dSA}\n\nEnrolled in WebDev:\n${webDev}`);
                run = false;
                break;
            }
        };
    } else if (choice === "B") {
        while (run) {
            let choice2 = prompt("Select an option if:\nA. Enroll\nB. Unenroll\nC. Select Another Subject\nD. Exit").toUpperCase();
            if (choice2 === "A") {
                let studName = prompt("Student Name to Enroll (first and last name):");
                webDev.push(studName);
                alert(`The ${studName} has been enrolled.\nList of Student(s):\n${webDev}`);
            } else if (choice2 === "B") {
                let studName = prompt("Student Name to Unenroll:");
                let index = webDev.indexOf(studName);
                if (index !== -1) {
                    webDev.splice(index, 1); // Remove student if found
                }
                alert(`The ${studName} has been unenrolled.\nStudent(s) Currently enrolled:\n${webDev}`);
            } else if (choice2 === "C") {
                break;
            } else {
                alert(`Exiting. Printing the results:\nEnrolled in DSA:\n${dSA}\n\nEnrolled in WebDev:\n${webDev}`);
                run = false;
                break;
            }
        };
    } else {
        alert("Invalid Input. Re-run the program.");
        break
    };
};