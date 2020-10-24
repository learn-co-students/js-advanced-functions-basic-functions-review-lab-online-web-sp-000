// function declarations
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

let mondayWork = function(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(value = "*") {
    let innerFunction = function(adjective = "special") {
        return `You are ${value}${adjective}${value}!`;
    }
    return innerFunction;
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

// function expression
const actionApplyer = (number, arrayOfFunction) => {
    if (arrayOfFunction.length === 0) {
        return number
    }
    arrayOfFunction.forEach(func => {
        number = func(number)
    });
    return number
}




