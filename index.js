// Your code here
// Function Declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Function Expression
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

// Demonstrate scope chain
function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
        return `You are ${flair + adj + flair}!`;
    }
}

// Javascript object definition with functions
const Calculator = {
    add: function(num1, num2) { return num1 + num2 },
    subtract: function(num1, num2) {return num1 - num2 },
    multiply: function(num1, num2) {return num1 * num2 },
    divide: function(num1, num2) {return num1 / num2 }
};

function actionApplyer(startInt, funcArr) {
    if (funcArr === []) {
        return startInt;
    } else {
        let result = startInt;
        for(const oper of funcArr) {
            result = oper(result);
        };
        return result;
    };
};