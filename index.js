// Your code here
function saturdayFun(activity ="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight = "*") {
  return function(param = "special") {
    return `You are ${highlight}${param}${highlight}!`
  }
}


const Calculator = {
  add: function(num1, num2){
    return num1 + num2
  },
  subtract: function(num1, num2){
    return num1 - num2
  },
  multiply: function(num1, num2){
    return num1 * num2
  },
  divide: function(num1, num2){
    return num1 / num2
  }
}

function actionApplyer(int, arr) {
  let a = int

  for (let i = 0; i < arr.length; i++){
    a = arr[i](a)
  }
  return a
}
