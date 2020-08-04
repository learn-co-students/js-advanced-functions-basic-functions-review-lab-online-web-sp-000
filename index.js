// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(outPm = "*") {
    return function(pm = "special") {
        return `You are ${outPm}${pm}${outPm}!` 
    }
}

const Calculator = {
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
}

function actionApplyer(int, arr) {
    if (arr === []) {
        return int
    } else {
        for (let i = 0; i < arr.length; i++) {
            int = arr[i](int)
        };
        return int;
    }
}