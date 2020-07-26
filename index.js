// Your code here
function saturdayFun( activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(char='*') {
    return function (adj='special') {
        return `You are ${char}${adj}${char}!`
    }
}

let Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer(startInt, array) {
    if (array.length === 0) {
        return startInt
    }
    else {
        let result = startInt
        for (let i = 0; i < array.length; i++) {
            result = array[i](result)
        }
        return result
    }
}