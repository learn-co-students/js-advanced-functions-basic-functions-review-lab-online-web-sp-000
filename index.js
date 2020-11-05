// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair="*") {
  return function(adj='special') {
    return `You are ${flair}${adj}${flair}!`
  }
};

let Calculator = {
  'add': function() {
    return 1 + 3;
  },
  'subtract': function() {
    return 1 - 3;
  },
  'multiply': function() {
    return 1 * 3;
  },
  'divide': function() {
    return 10 / 5;
  }
};
//
// function actionApplyer(start, array) {
//
// };
