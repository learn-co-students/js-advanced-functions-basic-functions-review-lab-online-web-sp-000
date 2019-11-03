function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(otherthing = "*") {
  return function(something = "special") {
    return `You are ${otherthing}${something}${otherthing}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
}

function actionApplyer(integer, functionsArray) {
  for (let i = 0; i < functionsArray.length; i++){
    integer = functionsArray[i](integer)
  }

  return integer
}
