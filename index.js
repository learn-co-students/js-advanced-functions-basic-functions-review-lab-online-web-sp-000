// Your code here
function saturdayFun(action="roller-skate"){
    return `This Saturday, I want to ${action}!`
}

const mondayWork = function(action="go to the office"){
    return `This Monday, I will ${action}.`
}

const wrapAdjective = function(flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(a, b){return a + b},
    subtract: function(a, b){return a - b},
    multiply: function(a, b){return a * b},
    divide: function(a, b){return a / b}
}

function actionApplyer(start, array){
    let int = start

    for(let i = 0; i < array.length; i++){
        int = array[i](int)
    }

    return int
}