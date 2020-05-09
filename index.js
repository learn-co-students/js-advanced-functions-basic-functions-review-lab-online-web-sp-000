// Your code here

// LAB: Implement a function called saturdayFun. It should return a 
// String like "This Saturday, I want to ....!" Fill in the ... with 
// the activity that's passed in as the first parameter. If nothing is
//  passed in, default to "roller-skate". Use the learn program to verify 
//  you've gotten a working implementation. Come back here once you've 
//  gotten just this set of tests passing.

function saturdayFun(activity = "roller-skate") {
 return `This Saturday, I want to ${activity}!`;
}
saturdayFun('ski');

// LAB: Implement a function called mondayWork. It should return a String like 
// "This Monday, I will ... ." Fill in the ... with the activity that's passed in 
// as the first parameter. If nothing is passed in, default to "go to the office". 
// Use the learn program to verify you've gotten a working implementation

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
 }

// ? Implement a function called wrapAdjective.
// ? It should return a function
// This "inner" function should:
  // ? take a single parameter that should default to "special". Name it however you wish.
  // ? return a String of the form "You are ..." where ... should be the adjective this 
// function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") 
// => "You are %a dedicated programmer%!"
//! those were some tortured instructions. :-/


function wrapAdjective(flair="*") {
  return function(adj="special") {
    return `You are ${flair}${adj}${flair}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!");
wrapAdjective("%")("a dedicated programmer");

let Calculator = {
  add: function(){return 1+3}, 
  subtract: function(){return 1-3}, 
  multiply: function(){return 1*3}, 
  divide: function(){return 10/5}
}

function actionApplyer(int, arrayOfFunctions) {
  if (arrayOfFunctions.length > 0) {
    let num = int;
    for (const singleFunction of arrayOfFunctions) {
      num = singleFunction(num);
    }
    return num;
  } else {
    return int;
  }
}


