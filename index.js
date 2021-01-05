// Your code here
function saturdayFun(word="roller-skate") {
    return `This Saturday, I want to ${word}!`
}

function mondayWork(thing='go to the office') {
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(symbol= "*") {
    return function(message= "special") {
      return `You are ${symbol}${message}${symbol}!`
    }
}

let Calculator = {
      add: function(num1, num2) {
         return num1 + num2
    },
     subtract: function(num1, num2) {
        return num1 - num2
     },
     multiply: function(num1, num2) {
        return num1 * num2
     },
     divide: function(num1, num2) {
        return num1 / num2
     }
}

function actionApplyer(int= 0, array= []) {
    let x = int;
    array.forEach(func => {
        x = func(x)
    });
    return x
}