function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
  return function (adj = 'special') {
    return `You are ${flair}${adj}${flair}!`;
  }
}

let Calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b
  },

  divide(a, b) {
    return a / b;
  }
}

function actionApplyer(int, arr) {
  if (arr.length === 0) {
    return int;
  } else {
    arr.forEach(func => int = func(int));
    return int
  }
}