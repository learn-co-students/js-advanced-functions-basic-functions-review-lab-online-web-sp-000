// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair="*") {
    return function(foo="special") {
        return `You are ${flair}${foo}${flair}!`;
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
};

function actionApplyer(baseInt, arrayOfFns=[]) {
    if (arrayOfFns.length === 0) {
        return baseInt;
    } else {
        arrayOfFns.forEach(fn => {
            baseInt = fn(baseInt);
        });
        return baseInt;
    }
}