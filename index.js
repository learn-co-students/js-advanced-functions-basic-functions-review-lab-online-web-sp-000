function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(visual="*"){
    return function(words="special"){
        return `You are ${visual}${words}${visual}!`
    }
};

let Calculator = {
    add: function add(num1, num2){
        return num1 + num2
    },
    subtract: function subtract(num1, num2){
        return num1 - num2
    },
    multiply: function multiply(num1, num2){
        return num1 * num2
    },
    divide: function divide(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(integer, array){
    array.forEach(number => integer = number(integer))
    return integer 
};
