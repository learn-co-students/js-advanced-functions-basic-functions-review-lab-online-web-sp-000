// Your code here
function saturdayFun (activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => `This Monday, I will ${activity}.`

function wrapAdjective (string="*") {
    return function(param="special") { 
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

function actionApplyer (start, functionArray) {
    let int = start
    
    for (let i = 0; i < functionArray.length; i++) {
       int = functionArray[i](int)
    }
    return int
}