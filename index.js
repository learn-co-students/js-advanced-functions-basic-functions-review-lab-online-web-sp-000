function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun()

function mondayWork(activity="go to the office") {
    return(`This Monday, I will ${activity}.`);
} 
mondayWork()

function wrapAdjective(flair="*") {
    return function(adj="special"){return `You are ${flair}${adj}${flair}!`}
}

function add() {
    return 1 + 3
}

function subtract() {
    return 1 - 3
}

function multiply() {
    return 1 * 3
}

function divide() {
    return 10/5
}

let Calculator = {add, subtract, multiply, divide}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
    
}

