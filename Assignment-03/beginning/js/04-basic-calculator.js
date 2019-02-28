/*eslint-env browser*/

function calculator() {
    "use strict";
    var firstNumber, secondNumber, operation, result;
    firstNumber = window.prompt("Enter a number");
    secondNumber = window.prompt("Enter another number");
    operation = window.prompt("What operation would you like to perform: \'+',  \'-',  \'*',  \'/' ?");

    switch (operation) {
    case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        window.alert("The result of adding " + firstNumber + " and " + secondNumber + " is " + result + ".");
        break;
    case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        window.alert("The result of subtracting " + secondNumber + " from " + firstNumber + " is " + result + ".");
        break;
    case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        window.alert("The result of multiplying " + firstNumber + " and " + secondNumber + " is " + result + ".");
        break;
    case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        window.alert("The result of dividing " + firstNumber + " by " + secondNumber + " is " + result + ".");
        break;
    default:
        window.alert("Try again. Enter the operation.");
    }
}
//calculator();

function main() {
    "use strict";
    var playAgain = "y";
    while (playAgain === "y") {
        calculator();
        playAgain = window.prompt("Do you want to calculate anything else (y/n)?");
    }
    window.alert("Thanks for using my calculator.");
}
main();
