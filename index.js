// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
  return function(adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  }
}


let Calculator = {
  add: function(x, y) {return x + y;},
  subtract: function(x, y) {return x - y;},
  multiply: function(x, y) {return x*y;},
  divide: function(x, y) {return x/y;}
}

function actionApplyer(startingInteger, array) {
  if (array.length === 0 ) {
    return startingInteger;
  } else {
    for (let i = 0; i < array.length; i++) {
      startingInteger = array[i](startingInteger)
    }
    return startingInteger;
  }
}
