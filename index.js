// Your code here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string = '*'){
  return function(adj = 'special'){
    return `You are ${string+adj+string}!`;
  };
}

let Calculator = {
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
};

function actionApplyer(integer, array){
  for(let i = 0; i < array.length; i++){
    integer = array[i](integer);
  }
  return integer;
}
