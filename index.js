// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {
  add : function(num1, num2) {
    return num1 +  num2
  },
  subtract : function(num1, num2) {
    return num1 - num2
  },
  multiply : function(num1, num2) {
    return num1 * num2
  },
  divide : function(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(start_int, func_array) {
  let a = start_int

  for (let i = 0; i < func_array.length; i++) {
   a = func_array[i](a)
 }
 return a
}
