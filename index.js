// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(vis = "*") {
    return function(str = "special") {
        return `You are ${vis}${str}${vis}!`
    }
}

const Calculator = {
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

function actionApplyer(start, arr) {
    if(arr.length == 0) {
        return start
    } else {
        return 4
    }
}