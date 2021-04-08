// Your code here
function saturdayFun(activity= "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(parameterone = "*") {
  return function(parameter="special"){
    return `You are ${parameterone}${parameter}${parameterone}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
};

function actionApplyer(starting, aof){
  let a = starting;

  for (let i = 0; i < aof.length; i++ ){
    a = aof[i](a)
  }
  return a
};

// This Monday, I will ... ."
// activity passed in as the first parameter. IF nothing is passed in, default to "go to the office".
