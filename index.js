function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(input='special') {
    return `You are ${flair}${input}${flair}!`;
  };
}

let Calculator = {
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

function actionApplyer(start, fns) {
  for (let i = 0; i < fns.length; i++) {
    start = fns[i](start);
  }
  return start;
}
