// Your code here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}

let mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(arg = '*') {
    return function (spec = 'special') {
        return `You are ${arg}${spec}${arg}!`
    }
}

let Calculator = {add: function (num1, num2) {
    return num1 + num2
}, subtract: function (num1, num2) {
    return num1 - num2
}, multiply: function (num1, num2) {
    return num1 * num2
}, divide: function (num1, num2) {
    return num1 / num2
}}

function actionApplyer (start, array) {
    
    // if (array.length < 1) {
    //     return start
    // } else {
        
        let retFunction = start;

        for(let i = 0; i < array.length; i++) {
            retFunction = array[i](retFunction)
        }

        return retFunction

        //return array[2](array[1](array[0](start)))
    // }
    
}
