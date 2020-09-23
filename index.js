function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symb='*') {
  return function(desc='special') {
    return `You are ${symb}${desc}${symb}!`;
  };
}

const Calculator = {
  add: (function (a,b) { return a + b; }),
  subtract: (function (a,b) { return a - b; }),
  multiply: (function (a,b) { return a * b; }),
  divide: (function (a,b) { return a / b; })
};

function actionApplyer(int, funcArray) {
  let arg = int;
  for (const func of funcArray) {
    const result = func(arg);
    arg = result;
  }
  return arg;
}
