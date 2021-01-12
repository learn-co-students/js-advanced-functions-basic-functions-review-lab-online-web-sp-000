// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(flair="*") {
    return function inner(descriptor='special'){return `You are ${flair}${descriptor}${flair}!`}
}

let Calculator = {
    add: function(a, b) {return (a + b)},
    subtract: function(a, b) {return (a - b)},
    multiply: function(a, b) {return (a * b)},
    divide: function(a, b) {return (a / b)}
}

function actionApplyer(start, arr) {
    if (arr.length == 0) {
        return start
    } else {
        let result = start;        
        for (const func of arr) {
            result = func(result)
        }
        return result
    }
}