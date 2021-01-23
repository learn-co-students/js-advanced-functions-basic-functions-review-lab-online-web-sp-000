// Your code here

function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {return `This Monday, I will ${activity}.`}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair + adj + flair}!`
    }
    
}

let Calculator = {

 add: (a,b) => {return a + b},
 subtract: (a,b) => {return a - b},
 multiply: (a,b) => {return a * b},
 divide: (a,b) => {return a / b}



}

function actionApplyer(integer, functionsArray = []) {
    if (functionsArray.length > 0) {
 functionsArray.forEach(fn => {
    integer = fn(integer);
})
    
    return integer}
    else {
        return integer
    }
}