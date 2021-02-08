// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(something="*"){
    return function(type="special"){
        return `You are ${something}${type}${something}!`
    } 
};

const Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a/b
    }
};

function actionApplyer(startInteger, fnArray){
    let a = startInteger
    for (let i = 0; i < fnArray.length; i++){
      a = fnArray[i](a)
    }
    return a
} 