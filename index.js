function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.` 
}

function wrapAdjective(arg="*") {
    return function(adj="special") {
      return `You are ${arg }${adj}${arg}!`;
    }
}

function actionApplyer(integer, fns) {
for (let i = 0; i < fns.length; i++) {
    integer = fns[i](integer)
}    
    return integer;
}


const Calculator = {
    'add': function add(num1, num2) {
        return num1 + num2;
    },
    'subtract': function subtract(num1, num2) {
        return num1 - num2;
    },
    'divide': function divide(num1, num2) {
        return num1/num2;
    },
    'multiply': function multiply(num1, num2) {
        return num1 * num2;
    }
};







    
