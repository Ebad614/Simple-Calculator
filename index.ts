import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: Number, name: "firstNumber" },
  { message: "Enter Second Number", type: Number, name: "secondNumber" },
  {
    message: "Select one of the operators to perfom Operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Addition") {
    console.log(+answer.firstNumber + +answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select valid operator");
}