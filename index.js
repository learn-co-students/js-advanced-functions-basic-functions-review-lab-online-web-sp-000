function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective2='*') {
    return function(adjective='special') {
        return `You are ${adjective2}${adjective}${adjective2}!`
    }
}
let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
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