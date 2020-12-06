// Your code here
function saturdayFun(par="roller-skate") {
    return `This Saturday, I want to ${par}!`;
}

let mondayWork = function(par="go to the office") {
    return `This Monday, I will ${par}.`;
}

function wrapAdjective(parameter="*") {
    return function(par2="special") {
      return `You are ${parameter}${par2}${parameter}!`;
    }
}

const Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }