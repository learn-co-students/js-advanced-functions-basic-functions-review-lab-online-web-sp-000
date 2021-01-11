// Your code here
function saturdayFun(activity = 'roller-skate') { 
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') { 
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(extra = '*') {
    return function(goodTrait = 'special') { 
        return `You are ${extra}${goodTrait}${extra}!`
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

function actionApplyer(start, array) {
    let returnValue = start 
    for (const element of array) {
        returnValue = element(returnValue)
    }
    return returnValue
}