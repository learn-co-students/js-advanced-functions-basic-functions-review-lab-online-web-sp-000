function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
  return function(param = "special") {
    return `You are ${string}${param}${string}!`
  }
}

let Calculator = {};

Calculator.add = function(a, b) {
  return a+b;
}

Calculator.subtract = function (a, b) {
  return a-b;
}

Calculator.multiply = function (a, b) {
  return a*b;
}

Calculator.divide = function (a, b) {
  return a/b;
}

function actionApplyer(integer, array) {
  let answer = integer;
  array.forEach(function (e) {
    answer = e(answer);
  })
  return answer;
}
