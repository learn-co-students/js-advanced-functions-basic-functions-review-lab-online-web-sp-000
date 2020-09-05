// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(travel = "go to the office") {
  return `This Monday, I will ${travel}.`;
}

function wrapAdjective(flair = "*") {
  return function (arg = "special") {
    return `You are ${flair}${arg}${flair}!`;
  };
}

let Calculator = {};
Calculator.add = function (num1, num2) {
  return num1 + num2;
};

Calculator.subtract = function (num1, num2) {
  return num1 - num2;
};

Calculator.multiply = function (num1, num2) {
  return num1 * num2;
};

Calculator.divide = function (num1, num2) {
  return num1 / num2;
};

function actionApplyer(number, array) {
  let arg = number;

  array.forEach((element) => {
    arg = element(arg);
  });
  return arg;
}
