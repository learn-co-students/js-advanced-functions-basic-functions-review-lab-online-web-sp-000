//Declaration
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

//Function Expression
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function innerFunction(msg="special") {
        return `You are ${flair}${msg}${flair}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a+b
    },
    subtract: function(a, b) {
        return a-b
    },
    multiply: function(a, b) {
        return a*b
    },
    divide: function(a, b) {
        return a/b
    }
}

function actionApplyer(int, arr) {
    for (let i = 0; i < arr.length; i++) {
        int = arr[i](int);
    }
    return int
}