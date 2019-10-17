function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`
  }
}

const Calculator = {
  add : (a, b) => a + b,
  subtract : (a, b) => a - b,
  multiply : (a, b) => a * b,
  divide : (a, b) => a / b
}

function actionApplyer (startingInteger, arrayOfFunctions) {
  for (let fn of arrayOfFunctions) {
    startingInteger = fn(startingInteger);
  }
  return startingInteger;
}
