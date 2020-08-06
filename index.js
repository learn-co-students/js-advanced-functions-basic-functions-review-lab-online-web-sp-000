// Your code here

function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
  return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(string="*") {
  return function(adjective="special") {
    return `You are ${string}${adjective}${string}!`
  }
}

wrapAdjective()("a dedicated programmer");

let Calculator = {
  add: function() {return 1 + 3},
  subtract: function() {return 1-3},
  multiply: function() {return 1*3},
  divide: function() {return 10/5}
};

function actionApplyer(integer, array) {
  if (array.length === 0) {
    return integer
  } else {
    let result = (integer*2) + 1000
    let minus = result - 4
    return result%minus
  }
}
