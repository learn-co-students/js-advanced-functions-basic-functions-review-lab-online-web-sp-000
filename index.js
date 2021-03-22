// Your code here
function saturdayFun(action = "roller-skate") {
    return `This Saturday, I want to ${action}!`;
}

const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`;
};

function wrapAdjective (inString = "*") {
    return function (special = "special") {
            return `You are ${inString}${special}${inString}!`;
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
}

function actionApplyer(start, fnArray) {
    if (fnArray.length === 0){
        return start
    }
    else {
        let output = start;
        for(const fn of fnArray){
            output = fn(output);
        }
        return output;
    }
}
