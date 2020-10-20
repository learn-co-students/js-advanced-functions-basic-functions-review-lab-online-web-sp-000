// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(outterString="*") {
    return function innerF(innerString="special") {
        return `You are ${outterString}${innerString}${outterString}!`;
    }
}

const Calculator = {
    add: function add(n1, n2) {
        return n1 + n2;
    },

    subtract: function subtract(n1, n2) {
        return n1 - n2;
    },
    
    multiply: function  multiply(n1, n2) {
        return n1 * n2;  
    },
    
    divide: function  divide(n1, n2) {
        return n1 / n2;  
    }
} 

function actionApplyer(int, functions) {
    let a = int;

    for (let i = 0; i < functions.length; i++) {
        a = functions[i](a);
    }

    return a;
}