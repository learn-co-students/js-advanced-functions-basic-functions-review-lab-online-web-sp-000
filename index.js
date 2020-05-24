// Your code here
function saturdayFun(verb="roller-skate") {
    return `This Saturday, I want to ${verb}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(parameter='*') {
    return function(second_parameter) {
        return `You are ${parameter}${second_parameter}${parameter}!`
    }
}

const Calculator = {
    add: function(x,y) {
        return x + y;
    },

    subtract: function(x,y) {
        return x - y;
    },

    multiply: function(x,y) {
        return x * y;
    },

    divide: function(x,y) {
        return x / y;
    }
}

function actionApplyer(x=0, array=[]) {
    for (let fn of array) {
        x = fn(x);
    }
    return x
}