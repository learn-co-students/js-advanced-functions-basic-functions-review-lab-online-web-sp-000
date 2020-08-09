// Your code here
function saturdayFun(thing = "roller-skate") {
  return `This Saturday, I want to ${thing}!`
}

function mondayWork(string = "go to the office") {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(flair = "*") {
  return function(p = "special") {
    return `You are ${flair}${p}${flair}!`
  }
}

const Calculator = {}
Calculator.add = function(x, y) {
  return x + y;
}
Calculator.subtract = function(x, y) {
  return x - y;
}
Calculator.multiply = function(x, y) {
  return x * y;
}
Calculator.divide = function(x, y) {
  return x / y;
}

function actionApplyer(int, fn_array) {
  if (fn_array.length == 0) {
    return int;
  }
  else {
    return (int * 2 + 1000) % 7;
  }
}



