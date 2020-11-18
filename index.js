// Your code here

function wrapAdjective(symbol = "*", message = "You are ") {
    return function(word = "special") {
        return `${message + symbol + word + symbol}!`;
    };
};

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
};

function actionApplyer(number, actions) {
    for (const action of actions) {
        number = action(number);
    };
    return number;
};