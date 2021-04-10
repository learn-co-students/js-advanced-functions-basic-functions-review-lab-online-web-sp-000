// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap="*") {
  return function(adjective="special") {
    return `You are ${wrap}${adjective}${wrap}!`
  }
}

const Calculator = {
  add: function add(num1, num2) {
    return num1 + num2; 
  },
  subtract: function subtract(num1, num2) {
    return num1 - num2; 
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2; 
  },
  divide: function divide(num1, num2) {
    return num1 / num2; 
  }
};

function actionApplyer(integer, array) {
  array.forEach(number => integer = number(integer))
  return integer 
};