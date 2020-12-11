// Your code here
function saturdayFun(activity="roller-skate") {
  let message = `This Saturday, I want to ${activity}!`
  return message;
}

function mondayWork(activity="go to the office") {
  let message = `This Monday, I will ${activity}.`
  return message;
}

function wrapAdjective(flair="*") {
  return function(special="special") {
    let message = `You are ${flair}${special}${flair}!`
    return message;
  }
}

let Calculator = {}
Calculator.add = function add(a, b) {return a+b}
Calculator.subtract = function subtract(a, b) {return a-b}
Calculator.multiply = function multiply(a, b) {return a*b}
Calculator.divide = function divide(a, b) {return a/b}

function actionApplyer(integer, array) {
  if (array.length != 0) {
    let num = integer;
    for(const fn of array) {
      num = fn(num);
    }
    return num;
  } else {
    return integer
  }
}
