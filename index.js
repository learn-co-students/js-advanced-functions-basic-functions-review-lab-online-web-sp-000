function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*') {
    return function (adjective='special') {
        return `You are ${symbol}${adjective}${symbol}!`
    }
}

let Calculator = {
    add() { return 1 + 3 },
    subtract() { return 1 - 3 },
    multiply() {return 1 * 3 },
    divide() {return 10 / 5 }
};

function actionApplyer(startingInt, arrayFunc) {
    if (arrayFunc.length === 0) {
        return startingInt
    }
    else { 
        let result = startingInt
        for (let i = 0; i < arrayFunc.length; i++ ){
            result = arrayFunc[i](result)
        }
        return result;
    }
}
