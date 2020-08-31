// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(something="special") {
        return `You are ${string}${something}${string}!`;
    }
}

let Calculator = {
    add: function add(a, b) {
        return a + b;
    },
    subtract: function subtract(a, b) {
        return a - b;
    },
    multiply: function multiply(a, b) {
        return a * b;
    },
    divide: function divide(a, b) {
        return a / b;
    }
}

function actionApplyer(int, arr) {
    if (arr.length === 0) {
        return int;
    } else {
        for (let i = 0; i < arr.length; i++) {
            int = arr[i](int);
        }
        return int;
    }
}