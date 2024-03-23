#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will genrate random number - Done
// 2) user input for guessing number  - Done 
// 3) compare user input with computer genrate number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "pleasse guess a number between 1 to 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guess right number");
}
else {
    console.log("you guess worng! ");
}
