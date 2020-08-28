// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    adjective = flair + adjective + flair;
    return `You are ${adjective}!`;
  };
}
const Calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};
function actionApplyer(integer, array) {
  if (array.length === 0) {
    return integer;
  } else {
    for (const key in array) {
      integer = array[key](integer);
    }
    return integer;
  }
}
