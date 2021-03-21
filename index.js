function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(bop = "*") {
  return function(thing = "special") {
    return `You are ${bop}${thing}${bop}!`;
  }
};

const Calculator = {
  add: function add(num1, num2) {
    return num1 + num2
  },

  subtract: function subtract(num1, num2) {
    return num1 - num2
  },

  divide: function divide(num1, num2) {
    return num1 / num2
  },

  multiply: function multiply(num1, num2) {
    return num1 * num2
  }
}

function actionApplyer(base, array) {
  let result = base

  array.forEach(element => result = element(result))

  return result
}