// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = "*") {
  return function(param = "special") {
    return `You are ${flair + param + flair}!`;
  };
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

function actionApplyer (startingInt, array) {
  if (!array || array.length === 0) {
    return startingInt;
  }else{
    let value = startingInt;
    for (let i = 0; i < array.length; i++){
      value = array[i](value);
    }
    return value;
  }
}