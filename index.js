function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string="*") {
    return function(param="special") {
        return `You are ${string}${param}${string}!`;
    }
}

const Calculator = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b}
};

function actionApplyer(int, array) {
    if (array === []) {
        return int;
    } else {
        for (const func of array) {
            int = func(int);
        } return int;
    }
}