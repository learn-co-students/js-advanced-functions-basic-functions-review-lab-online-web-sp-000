// Your code here
function saturdayFun(str = 'roller-skate') {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(c = '*') {
    return function (str = 'special') {
        return `You are ${c + str + c}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a , b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

const actionApplyer = function (start, arr) {
    let num = start;

    for (let i = 0; i < arr.length; i++) {
       num = arr[i](num);
    }

    return num;
}
