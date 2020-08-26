// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string="*") {
    return function (adjective="special") {
        return `You are ${string}${adjective}${string}!`;
    }
}

let Calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    },
};

function actionApplyer(integer, array) {
    let action = integer;
    for (let i = 0; i < array.length; i++) {
        action = array[i](action);
    }
    return action;
}