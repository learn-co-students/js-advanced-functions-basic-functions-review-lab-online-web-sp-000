function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(y="*") {
  return function(x="special") {
    return `You are ${y}${x}${y}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3;
  },
  subtract: function() {
    return 1 - 3;
  },
  multiply: function() {
    return 1 * 3;
  },
  divide: function() {
    return 10 / 5;
  }
}

function actionApplyer(integer, array) {
  if (array.length === 0) {
    return integer
  } else {
    let newInt = array.shift()(integer)
    return actionApplyer(newInt, array)
  }
}
