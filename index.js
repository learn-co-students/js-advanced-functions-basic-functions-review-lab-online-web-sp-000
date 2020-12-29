// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(exp = "*") {
     return function(param = "special") {
            return `You are ${exp}${param}${exp}!`
    }
}

var Calculator = {
    add: function(a,b) { return a + b; },
    subtract: function(a,b) { return a - b; },
    multiply: function(a,b) { return a * b; },
    divide: function(a,b) { return a / b; }

};

function actionApplyer(start, set) {
    if (!set.length) {
        return start;
    } else {
        let result = start;
        for (let i = 0; i < set.length; i++) {
            result = set[i](result);
        }
        return result;
    }
}
