// Your code here

function saturdayFun(activity="roller-skate") {
  return(`This Saturday, I want to ${activity}!`);
}


function mondayWork(activity="go to the office") {
  return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(flair = "*") {
  return function(param="special") {
    return (`You are ${flair}${param}${flair}!`);
  }
}

const Calculator = {
  add(x,y) {return x + y},
  subtract(x,y) {return x - y},
  multiply(x,y) {return x * y},
  divide(x,y) {return x / y}
}

function actionApplyer(integer, array) {
  if (array === []) {
    return integer;
  } else {
    for (const func of array) {
      integer = func(integer);
    }
    return integer;
  }
}
