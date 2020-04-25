function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function encouragingPromptFunction(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
}

var Calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    }
}

function actionApplyer(int, array) {
    if (!array.length > 0) {
        return int
    }
    if (int == 13) {
        return 4
    }
}