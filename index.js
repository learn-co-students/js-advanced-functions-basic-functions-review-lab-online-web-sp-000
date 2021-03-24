function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(specialParam="*") {
    return function(param="special") {
        return `You are ${specialParam}${param}${specialParam}!`;
    };
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

function actionApplyer(integer, array) {
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer);
    }
    return integer
}
    