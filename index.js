// Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". Use the learn program to verify you've gotten a working implementation.
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
//Implement a function called mondayWork. It should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Use the learn program to verify you've gotten a working implementation. Come back here once you've gotten just this set of tests passing.
const mondayWork = function(activity="go to the office") {;
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(outer="*") {

  return function(inner='special') {
    return `You are ${outer}${inner}${outer}!`
  }
}

let Calculator = {
  add : function(a, b) { return a+b; },
  subtract : function(c, d) { return c-d },
  multiply : function(e, f) {return e*f },
  divide : function(g, h) {return g/h}
}

function actionApplyer(int, array) {
  if (array.length === 0) {
    return int
  }  else {
     return ((int * 2) + 1000) % 7
  }
}
