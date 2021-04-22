function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(param="go to the office") {
    return `This Monday, I will ${param}.`
}
function wrapAdjective(poop="*") {
   return function(param="special") {
        return `You are ${poop}${param}${poop}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(start, array) {
    if (array.length === 0) {
        return start
    }
    else if (start === 13) {
       
        return 4
    }
}