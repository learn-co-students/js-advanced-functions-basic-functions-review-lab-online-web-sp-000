// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
   return function(ex = "special") {
       return `You are ${flair + ex + flair}!`
   }
}

const Calculator = {add, subtract, multiply, divide}

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x/y
}

function actionApplyer(startingInt, functionArray) {
    let a = startingInt

    for (let i = 0; i < functionArray.length; i++) {
        a = functionArray[i](a)
    }
    return a 
}