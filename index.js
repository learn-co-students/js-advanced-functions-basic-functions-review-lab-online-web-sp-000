// Your code here

function saturdayFun(activity='roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(job='go to the office') {
    return (`This Monday, I will ${job}.`)
}

function wrapAdjective(flair='*') {
    return function(adjective='special') {
        return (`You are ${flair}${adjective}${flair}!`)
    }
}

const Calculator = {
    add: function(a,b) {
    return a + b
    },
    subtract: function(a,b) {
        return a - b
    }, 
    multiply: function(a,b) {
        return a * b
    }, 
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(n, functionArray) {
    if (functionArray.length === 0) {
        return n
    } else {
        let start = functionArray[0]
        let result = start(n)
        return actionApplyer(result, functionArray.slice(1))
    }

}