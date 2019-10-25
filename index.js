function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = '*') {
  return function(adjective = 'special') {
    return `You are ${symbol}${adjective}${symbol}!`
  }
}

const Calculator = {
  add: function(num1, num2) { return num1 + num2 },
  subtract: function(num1, num2) { return num1 - num2 },
  multiply: function(num1, num2) { return num1 * num2 },
  divide: function(num1, num2) { return num1 / num2 }
}

function actionApplyer(start, functions) {
  for(const fn of functions) { start = fn(start); }
  return start;
}