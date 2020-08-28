// Your code here
function saturdayFun(something = 'roller-skate'){
  return `This Saturday, I want to ${something}!`;
}

const mondayWork = function(something = 'go to the office'){
  return `This Monday, I will ${something}.`
}

function wrapAdjective(s='*'){
  return function(something){
    return `You are ${s}${something}${s}!`
  }
}

const Calculator = {
    add: function(a, b){
      return a+b;
    },
    subtract: function(a, b){
      return a-b;
    },
    multiply: function(a, b){
      return a*b;
    },
    divide: function(a, b){
      return a/b;
    }
}

function actionApplyer(number, array){
  let result = number;
  for(const fun of array) result = fun(result);
  return result;
}
