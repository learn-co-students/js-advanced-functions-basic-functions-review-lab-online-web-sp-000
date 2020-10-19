// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual = '*') {
    return function(adjective= 'special') {
        return `You are ${visual}${adjective}${visual}!`
    }
}

let Calculator = { 
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

function actionApplyer(int, array) {
    let x = int

    for (let i = 0; i < array.length; i++) {
        x = array[i](x)
    }

    return x
}
