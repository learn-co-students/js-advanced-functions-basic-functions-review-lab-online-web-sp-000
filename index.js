// Your code here
// Define fn using FUNCTION DECALARATION
// defines saturdayFun fn declaration as specified
// uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

// Declare fn using FUNCTION EXPRESSION
// uses the default activity 'go to the office' when no arguments are passed
// permits the default activity to be overriden
// function mondayWork(activity="go to the office") { }
let mondayWork = function(activity="go to the office") { 
  return `This Monday, I will ${activity}.`
} 

// SCOPE CHAIN
// when initialized with '*' creates a fn - when called: wraps an adjective in a highlight
// when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
function wrapAdjective(flair="*") {
  return function(adj="special") { //inner
    return `You are ${flair}${adj}${flair}!`
  }
}

// defines an object called Calculator
// that has a function called add
// that has a function called subtract
// that has a function called multiply
// that has a function called divide
let Calculator = {
  add: function(a,b) { return a + b },
  subtract: function(a,b) { return a - b },
  multiply: function(a, b) { return a * b },
  divide:  function(a,b) { return a / b }
}

// returns the given starting point, unchanged, when the array is empty
// Given 13, returns 4 after being acted on by several functions
function actionApplyer(start, arrFns){
  if (arrFns.length === 0) {
    return start
  } else {
    for (const fn of arrFns) {
      start = fn(start);
    };
    return start;
    // Option 2:
    // arrFns.forEach((fn) => {
    //   let newInt = fn(start);
    //   start = newInt
    // });
    // return start;
  }
  
}
