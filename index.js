// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity='go to the office') => {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
    return (adjective='special') => {
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    add: (a, b) => { return a + b },
    subtract: (a, b) => { return a - b },
    multiply: (a, b) => { return a * b },
    divide: (a, b) => { return a / b }
}

function actionApplyer(startInt, funcArray) {
    if (funcArray.length === 0) {
        return startInt;
    } else {
        for (const func of funcArray) {
            startInt = func(startInt);
        }
        return startInt;
    }
}