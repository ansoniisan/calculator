const screen = document.querySelector(".screen")

let firstNumber = '';

let copyFirstNumber;

let operator;

let secondNumber = '';

let result;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, operator, y) {
    if (operator === "+") {
        screen.textContent = add(x, y);
        return add(x, y);
    }
    else if (operator === "-") {
        screen.textContent = subtract(x, y);
        return add(x, y);
    }
    else if (operator === "*") {
        screen.textContent = Math.round(multiply(x, y) * 100) / 100;
        return multiply(x, y);
    }
    else if (operator === "/") {
        screen.textContent = Math.round(divide(x, y) * 100) / 100;
        return divide(x, y);
    }
    else {
       screen.textContent = "Unknown operator, please try again!"
    };
}


//NUMBER BUTTON section

const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", () => {
    screen.textContent += 1;
    firstNumber += 1;
    secondNumber += 1;
})

const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", () => {
    screen.textContent += 2;
    firstNumber += 2;
    secondNumber += 2;
})

const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", () => {
    screen.textContent += 3;
    firstNumber += 3;
    secondNumber += 3;
})

const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", () => {
    screen.textContent += 4;
    firstNumber += 4;
    secondNumber += 4;
})

const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", () => {
    screen.textContent += 5;
    firstNumber += 5;
    secondNumber += 5;
})

const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", () => {
    screen.textContent += 6;
    firstNumber += 6;
    secondNumber += 6;
})

const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", () => {
    screen.textContent += 7
    firstNumber += 7;
    secondNumber += 7;
})

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", () => {
    screen.textContent += 8;
    firstNumber += 8;
    secondNumber += 8;
})

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", () => {
    screen.textContent += 9;
    firstNumber += 9;
    secondNumber += 9;
})

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", () => {
    screen.textContent += 0;
    firstNumber += 0;
    secondNumber += 0;
})


//SIGN section

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    operator = "+";
    copyFirstNumber = +firstNumber;
    firstNumber = "";
    secondNumber = "";
    screen.textContent = "";
})

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {
    if (copyFirstNumber && operator && secondNumber) {
        secondNumber = +secondNumber;
        result = operate(copyFirstNumber, operator, secondNumber);
        screen.textContent = result;
        secondNumber = "";
    }
    else {
    operator = "-";
    copyFirstNumber = +firstNumber;
    secondNumber = "";
    screen.textContent = "";
    }
})

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
    operator = "*";
    copyFirstNumber = +firstNumber;
    secondNumber = "";
    screen.textContent = "";
})

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
    operator = "/";
    copyFirstNumber = +firstNumber;
    secondNumber = "";
    screen.textContent = "";
})

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    secondNumber = +secondNumber;
    console.log(copyFirstNumber);
    console.log(secondNumber);

    if (operator === "/" && secondNumber === 0) {
        alert("Dividing by zero? Try again!");
        console.log(firstNumber);
        console.log(secondNumber);
        firstNumber = "";
        secondNumber = "";
        screen.textContent = "";
    }
    else {
    result = operate(copyFirstNumber, operator, secondNumber); //12 (copyFirstNumber) + 7 (secondNumber)= 19 (result)
    console.log(result);
    firstNumber = result; //firstNumber = 19, copyFirstNumber = 12
    secondNumber = ""
    };
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    screen.textContent = ""
    firstNumber = "";
    copyFirstNumber = "";
    secondNumber = "";
    operator = "";
    console.log(firstNumber);
    console.log(secondNumber);
})