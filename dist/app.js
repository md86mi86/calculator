"use strict";
const $ = document;
const input = $.getElementById("input") || null;
const numbers = $.querySelectorAll(".number") || null;
const operations = $.querySelectorAll(".Operation") || null;
const equal = $.getElementById("equal") || null;
const cButton = $.getElementById("c") || null;
let firstOperand = 0;
let secondOperand = 0;
let currentOperation = "";
function performCalculation(firstNumber, secondNumber, operation) {
    let result = 0;
    if (operation === "+") {
        result = firstNumber + secondNumber;
    }
    else if (operation === "-") {
        result = firstNumber - secondNumber;
    }
    else if (operation === "*") {
        result = firstNumber * secondNumber;
    }
    else if (operation === "/") {
        if (secondNumber === 0) {
            result = "Error";
        }
        else {
            result = firstNumber / secondNumber;
        }
    }
    return result;
}
if (input && numbers) {
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            const value = number.getAttribute("data-value") || "";
            if (input.textContent && input.textContent.length < 6) {
                if (input.textContent === "0") {
                    input.textContent = value;
                }
                else {
                    input.textContent += value;
                }
            }
        });
    });
}
if (input && operations) {
    operations.forEach((operation) => {
        operation.addEventListener("click", () => {
            const op = operation.getAttribute("data-value") || "";
            if (input.textContent && input.textContent.length > 0) {
                firstOperand = Number(input.textContent);
                currentOperation = op;
                input.textContent = "0";
            }
        });
    });
}
if (input && equal) {
    equal.addEventListener("click", () => {
        if (input.textContent && input.textContent.length > 0 && currentOperation) {
            secondOperand = Number(input.textContent);
            const result = performCalculation(firstOperand, secondOperand, currentOperation);
            input.textContent = typeof result === "number" ? String(result) : result;
            firstOperand = 0;
            secondOperand = 0;
            currentOperation = "";
        }
    });
}
if (input && cButton) {
    cButton.addEventListener("click", () => {
        input.textContent = "0";
        firstOperand = 0;
        secondOperand = 0;
        currentOperation = "";
    });
}
