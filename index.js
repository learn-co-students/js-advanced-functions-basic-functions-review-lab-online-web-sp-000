// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(something="special") {
        return `You are ${flair}${something}${flair}!`
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

function actionApplyer(start, array) {
        let returnValue = start
        for (const element of array) {
            returnValue = element(returnValue)
        }
        return returnValue

}