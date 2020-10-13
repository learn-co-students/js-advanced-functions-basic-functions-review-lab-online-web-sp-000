// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight = "*") {
  return function(msg = "special") {
    return `You are ${highlight}${msg}${highlight}!`
  }
}

let Calculator = {
  add: function(x, y) {
    return x + y
  },
  subtract: function(x, y) {
    return x - y
  },
  multiply: function(x, y) {
    return x * y
  },
  divide: function(x, y) {
    return x / y
  }
}

function actionApplyer(startingInteger, array) {
  let start = startingInteger
  for (let i = 0; i < array.length; i++) {
    start = array[i](start)
  }
  return start
}
