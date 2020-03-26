// Your code here
function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(string = "*") {
    return function (param = "special") {
        return(`You are ${string}${param}${string}!`)
    }
}


const Calculator = {}
Calculator.add = function(thing1, thing2) {
    return thing1 + thing2
}

Calculator.subtract = function(thing1, thing2) {
    return thing1 - thing2
}

Calculator.multiply = function(thing1, thing2) {
    return thing1*thing2
}

Calculator.divide = function(thing1, thing2) {
    return thing1/thing2
}

function actionApplyer(start, array) {
    if(array.length === 0) {
        return start
    }
    if(start = 13){
        return 4
    }
}