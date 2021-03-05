// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(char="*") {
  return function(adj="special") {
    return `You are ${char}${adj}${char}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

function actionApplyer(startInt, functionsArr) {
  let a = startInt;
  functionsArr.forEach(fn => {
    a = fn(a);
  });

  return a;
}