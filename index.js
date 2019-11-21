// Your code here

function saturdayFun(firstvar="roller-skate") {
  return `This Saturday, I want to ${firstvar}!`;
}

function mondayWork(firstvar="go to the office") {
  return `This Monday, I will ${firstvar}.`;
}

function wrapAdjective(name='*') {
    return function(firstvar='special') {
      return `You are ${name}${firstvar}${name}!`;
    }
  }

let Calculator = {
  add: function (n1, n2) { return n1 + n2},
  subtract: function (n1, n2) { return n1 - n2},
  multiply: function (n1, n2) { return n1 * n2},
  divide: function (n1, n2) { return n1 / n2}
};

function actionApplyer(start, functions) {
  for(const fn of functions) { start = fn(start); }
  return start;
}
