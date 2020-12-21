function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(flair = '*') {
    return function(word = "special") {
        return `You are ${flair}${word}${flair}!`;
    };
}

let Calculator = {}
Calculator.add = function(num1, num2) {
    return num1 + num2;
};
Calculator.subtract = function(num1, num2) {
    return num1 - num2;
};
Calculator.multiply = function(num1, num2) {
    return num1 * num2;
};
Calculator.divide = function(num1, num2) {
    return num1 / num2;
};

let actionApplyer = function(int, arr) {
    let result = int;
    for (const fn of arr) {
        result = fn(result)
    };
    return result;
}