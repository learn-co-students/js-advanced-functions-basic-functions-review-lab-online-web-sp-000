// Your code here
function wrapAdjective(paramOuter = "*") {
    return function (paramOne = "special") {
        return `You are ${paramOuter}${paramOne}${paramOuter}!`
    }
}
let encouragingPromptFunction = wrapAdjective("!!!")
encouragingPromptFunction();
  
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }
function actionApplyer(intiger, array) {
    let start = intiger;
    for (let i = 0; i < array.length; i++ ){
        start = array[i](start)
      }
    return start;
}