// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight = "*") {
    return function(text = "special") {
        return `You are ${highlight}${text}${highlight}!`
    }
}

const Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
};

function actionApplyer(startingInt, arr) {
    if (arr.length > 0) {
        let first = arr[0](startingInt)
        let second = arr[1](first)
        let third = arr[2](second)
        let result = third
        return result
    }
    return startingInt
}