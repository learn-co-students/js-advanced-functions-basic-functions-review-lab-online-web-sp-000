// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
  return function(firstArg="special") {
    return `You are ${visualFlair}${firstArg}${visualFlair}!`
  }
}

let encouragingPromptFunction = wrapAdjective("!!!");

let Calculator = {
  add: function() {
    return 1+3;
  },
  subtract: function() {
    return 1-3;
  },
  multiply: function() {
    return 1*3;
  },
  divide: function() {
    return 10/5;
  }
}

function actionApplyer(startInt, functions) {
  if(functions.length === 0) {
    return startInt;
  } else {
    for(let i = 0; i < functions.length; i++) {
      startInt = functions[i](startInt);
    }
    return startInt;
  }
}
