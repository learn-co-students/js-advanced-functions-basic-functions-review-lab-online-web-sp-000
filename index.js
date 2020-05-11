// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string1="*") {
    return function(string2 = "special") {
        return `You are ${string1}${string2}${string1}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(start, functions) {
    if (start === 0) {
        return 0
    } else {
        for (let i = 0; i < functions.length; i++) {
            start = functions[i](start)
        }
        return start
    }
}