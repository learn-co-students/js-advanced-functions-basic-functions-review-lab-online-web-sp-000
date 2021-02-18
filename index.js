// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work='go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(str='*') {
    return function(str2='special') {
        return `You are ${str}${str2}${str}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(num, array) {
    for (const fn of array) {
        num = fn(num);
    }
    return num;
}