// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(string="go to the office"){
    return `This Monday, I will ${string}.`
}

let wrapAdjective = function(punc="*"){
    return function(param1="special"){
        return `You are ${punc}${param1}${punc}!`
    }
}

const Calculator = {
    add: function(a, b){
    return a + b;
    }, 
    subtract: function(a, b){
        return a - b;
    }, 
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    } 
}

function actionApplyer(startInt, funcArray){
    let a = startInt;
    for(let i = 0; i < funcArray.length; i++){
        a = funcArray[i](a)
    }
    return a
} 
