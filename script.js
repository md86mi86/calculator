const $ = document;
let input = $.getElementById("input");
const numbers = $.querySelectorAll(".number");
const operations = $.querySelectorAll(".Operation");
const equal = $.getElementById("equal");
const cButton = $.getElementById("c");
let firstOperand = 0;
let secondOperand = 0;
let currentOperation = "";

// فانکشن برای انجام عملیات ها
function performCalculation(firstNumber, secondNumber, operation) {
    let result = 0;
    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber === 0) {
            result = "Error";
        } else {
            result = firstNumber / secondNumber;
        }
    }
    return result;
}

// کنترل کردن کلیک روی عدد ها
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (input.textContent.length < 6) {
            if (input.textContent === "0") {
                input.textContent = number.attributes[0].value;
            } else {
                input.textContent += number.attributes[0].value;
            }
        }
    });
});

// کنترل کردن کلیک روی عملیات ها
operations.forEach(operation => {
    operation.addEventListener("click", () => {
        currentOperation = operation.attributes[0].value;
        if (input.textContent.length > 0) {
            firstOperand = Number(input.textContent);
            input.textContent = "";
        }
    });
});

// کنترل کلیک روی مساوی
equal.addEventListener("click", () => {
    if (input.textContent.length > 0) {
        secondOperand = Number(input.textContent);
        input.textContent = performCalculation(firstOperand, secondOperand, currentOperation);
    }
});

// کنترل کلیک روی دکمه C
cButton.addEventListener("click",()=> {
    input.textContent = "0";
})