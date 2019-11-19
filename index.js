function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(ponct = '*') {
  return function(adj = 'special') {
    return `You are ${ponct}${adj}${ponct}!`
  }
}

let Calculator = {}

Calculator.add = function(num1,num2) {
  return num1 + num2;
}

Calculator.subtract = function(num1, num2) {
  return num1 - num2;
}

Calculator.multiply = function(num1, num2) {
  return num1 * num2;
}

Calculator.divide = function(num1, num2) {
  return num1 / num2;
}

const actionApplyer = function(baseInteger, arrayOfFunctions) {
  let start = baseInteger;

  for (let i = 0; i < arrayOfFunctions.length; i++) {
    start = arrayOfFunctions[i](start)
  }
  return start;
}
