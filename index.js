// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(holder="*") {
    return function(activity="special") {
        return `You are ${holder}${activity}${holder}!`
    }
}

let encouragingPromptFunction = wrapAdjective("%")
encouragingPromptFunction("a dedicated programmer")

let Calculator = {
    add(num1, num2) {
        return num1 + num2
    },

    subtract(num1, num2) {
        return num1 - num2
    },

    multiply(num1, num2) {
        return num1 * num2
    },

    divide(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(start, fin) {
    for (const action of fin) {
        start = action(start)
    }
    return start
}