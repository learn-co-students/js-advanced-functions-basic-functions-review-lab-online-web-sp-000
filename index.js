// Your code here

function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(style='*') {
  return function(adjective) {
    return `You are ${style}${adjective}${style}!`
  }
}

let Calculator = {
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

function actionApplyer(startInt='0', fnArray) {
  for (let i = 0; i < fnArray.length; i++) {
    startInt = fnArray[i](startInt);
  }
  return startInt;
}
