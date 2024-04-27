#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold("\n\n\t============Welcome to Ameer Saria's Student_Management_System============\t\n\n"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
// console.log(randomNumber);
let myBalance = 0;
let answer = await inquirer.prompt([{
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "course",
        type: "list",
        message: "Select the course in which you want to enroll.",
        choices: ["Ms Office", "Html", "Javascript", "Typescript", "Python"]
    }
]);
const tutionFee = {
    "Ms Office": 2000,
    "Html": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\nTution Fees: ${tutionFee[answer.course]}/-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfrer", "Easypaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }]);
console.log(`\nYou have selected payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.course];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations,you have successfully enrolled in ${answer.course}\n`);
    let ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }]);
    if (ans.select === "View Status") {
        console.log("\n************Status************\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student Id: ${randomNumber}`);
        console.log(`Course: ${answer.course}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance = +paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("Please enter valid amount according to course\n");
}
