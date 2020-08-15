// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
  return function (adj = "special") {
    return `You are ${flair + adj + flair}!`;
  };
}

const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function actionApplyer(integer, arrayOfFns) {
  if (arrayOfFns.length > 0) {
    arrayOfFns.forEach((fn) => {
      integer = fn(integer);
    });
  }
  return integer;
}
