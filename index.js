// Your code here
function saturdayFun(thing = "roller-skate") {
    return `This Saturday, I want to ${thing}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(deco = '*') {
    return function(thing = 'special') {
        return `You are ${deco}${thing}${deco}!`
    }
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

function actionApplyer(start, arr) {
    let a = start
    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a);
    }
    return a;
}