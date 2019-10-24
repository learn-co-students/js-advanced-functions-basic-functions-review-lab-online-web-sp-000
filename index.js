// Your code here
function mondayWork(string="go to the office"){
    return `This Monday, I will ${string}.`
}

let wrapAdjective = function(punc="*"){
    return function(param1="special"){
        return `You are ${punc}${param1}${punc}!`

    }
}

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

const Calculator = {
    add: function(x, y){
    return x + y;
    }, 
    subtract: function(x, y){
        return x - y;
    }, 
    multiply: function(x, y){
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    } 
}

function actionApplyer(startInt, funcArray){
    let a = startInt;
    for(let i = 0; i < funcArray.length; i++){
        a = funcArray[i](a)
    }
    return a
}