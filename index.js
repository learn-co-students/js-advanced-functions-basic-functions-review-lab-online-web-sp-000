// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(x='*') {
  return function(y) {
    return `You are ${x}${y}${x}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}

function actionApplyer(i=0, array=[]) {
  for (let fn of array) {
    i = fn(i)
  }
  return i
}
