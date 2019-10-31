// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair ="*"){
    return function(arg1 = "special"){
        return `You are ${flair}${arg1}${flair}!`;
    }
}

const Calculator = {};
Calculator.add = function(){
    return 1 + 3;
}
Calculator.subtract = function(){
    return 1 - 3;
}
Calculator.multiply = function(){
    return 1 * 3;
}
Calculator.divide = function(){
    return 10 / 5;
}

function actionApplyer(start, array){
    if (array === []){
        return start;
    } else {
        let result = start;
        for (const fn of array){
            result = fn(result);
        }
        return result;
    }
}