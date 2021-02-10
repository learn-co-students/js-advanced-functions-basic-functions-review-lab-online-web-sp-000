function saturdayFun(activity = "roller-skate"){
  return "This Saturday, I want to " + activity + "!"
}
function mondayWork(work = "go to the office"){
    return "This Monday, I will " + work + "."
}
function wrapAdjective(flair="*"){
  return function(adj = "special"){
    return "You are " + flair + adj + flair + "!"
  }
}
let Calculator = {
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
 function actionApplyer(num1, funcArray){
    if (funcArray.length == 0){
      return num1
    } else {
      let answer = num1
      for (const func of funcArray){
        answer = func(answer)
      }
      return answer
    }
  }
