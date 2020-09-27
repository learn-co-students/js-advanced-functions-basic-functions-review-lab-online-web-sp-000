// Your code here
function saturdayFun(activity = "roller-skate") {
  return (`This Saturday, I want to ${activity}!`)
}
saturdayFun()

function mondayWork(activity = "go to the office") {
  return (`This Monday, I will ${activity}.`)
}
mondayWork()

function wrapAdjective(highlight = "*") {
  return function(trait = "special"){
    return (`You are ${highlight}${trait}${highlight}!`)
  }
}

const Calculator = {
  add: function(x, y){
    return x+y;
  },
  subtract: function(x, y){
    return x-y;
  },
  multiply: function(x, y){
    return x*y;
  },
  divide: function(x, y){
    return x/y;
  }
}

function actionApplyer(x, arr) {
  for (let i = 0; i < arr.length; i++) {
    x = arr[i](x);
  }
  return x;
}
