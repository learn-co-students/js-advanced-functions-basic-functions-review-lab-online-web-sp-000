// Your code here

function saturdayFun(activity='roller-skate') {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(a='*') {
    return function(p='special'){
        return `You are ${a}${p}${a}!`
    }
}

let Calculator = {
    add: function(a,b){ return a + b},
    subtract: function(a,b){ return a - b},
    multiply: function(a,b){ return a * b},
    divide: function(a,b){ return a / b}
}

function actionApplyer(int, array) {
    if (array.length === 0) {
        return int
    } else {
        array.map(x => (int = x(int)))
        return int
    }
}