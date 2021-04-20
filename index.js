// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrap="*"){
    return function(parameter="special") {
        return `You are ${wrap}${parameter}${wrap}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!")

let number1;
let number2;
const Calculator = {
    add: function(number1, number2) {
        return number1 + number2;
    },
    subtract: function(number1, number2) {
        return number1 - number2;
    },
    multiply: function(number1, number2) {
        return number1 * number2;
    },
    divide: function(number1, number2) {
        return number1 / number2;
    }
};

function actionApplyer(startingInt, array){
    let a = startingInt
    for (let i=0; i < array.length; i++){
        a = array[i](a)
    }
    return a
};



