// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(gloss = "*") {
    return function(param = "special") {
        return `You are ${gloss}${param}${gloss}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
} 

function actionApplyer(startInt, arrayOfFunctions) {
    if (arrayOfFunctions.length > 0) {
        arrayOfFunctions.forEach(f => {
            startInt = f(startInt);
        })
    }
    return startInt;
}