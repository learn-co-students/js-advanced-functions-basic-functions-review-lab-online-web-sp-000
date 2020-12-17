// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`

}
function mondayWork(activity = "go to the office") {
    let string = `This Monday, I will ${activity}.`
    return string
}

function wrapAdjective(flair = "*") {
    return function(param = "special") {
        return `You are ${flair}${param}${flair}!`
    }
}

let Calculator = {
    add: function add(num1, num2) {
        return num1 + num2
    },
    subtract: function subtract(num1, num2) {
        return num1 - num2
    },
    multiply: function multiply(num1, num2) {
        return num1 * num2
    },
    divide: function divide(num1, num2) {
        return num1 / num2
    },
}

function actionApplyer(int, array) {
    for (let i = 0; i < array.length; i++) {
        int = array[i](int)
    }

    return int
}