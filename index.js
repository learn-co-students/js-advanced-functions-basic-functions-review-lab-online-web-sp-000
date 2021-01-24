// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(string='*', parameter='special') {
  return function(parameter) {
    return `You are ${string}${parameter}${string}!`
  }
}

let encouragingPromptFunction = wrapAdjective("!!!")

wrapAdjective("%")("a dedicated programmer")

let Calculator = {}
Calculator.add = (a, b) => a + b
Calculator.subtract = (a, b) => a - b
Calculator.multiply = (a, b) => a * b
Calculator.divide = (a, b) => a / b


function actionApplyer(start, functionArray) {
  let total = start
  if (functionArray.length !== 0) {
    functionArray.forEach(op => {
      total = op(start)
      start = total
    })
  }
  return total
}
