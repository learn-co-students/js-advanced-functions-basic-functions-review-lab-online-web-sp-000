// Your code here
function saturdayFun (saturday = "roller-skate") {
    return `This Saturday, I want to ${saturday}!`
}

function mondayWork (monday = "go to the office") {
    return `This Monday, I will ${monday}.`
}

function wrapAdjective (variable1 = "*") {
    return function (variable2 = "special") {
        return `You are ${variable1}${variable2}${variable1}!`
    } 
}

let Calculator = {
    add (a, b) {
        return a + b
    },
    subtract (a, b) {
        return a - b
    },
    multiply (a, b) {
        return a * b
    },
    divide (a, b) {
        return a / b
    }
}

function actionApplyer (start, array) {
    for(let i = 0; i < array.length; i++) {
        array[i](start)
        //I am calling the functions above ^
      }
    start
}

