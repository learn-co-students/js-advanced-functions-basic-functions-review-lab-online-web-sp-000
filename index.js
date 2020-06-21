function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol) {
  let emph = function emphatic1(text) {
    return `You are *${text}*!`
  }

  if (symbol === "||") {
    emph = function emphatic2(text) {
      return `You are ||${text}||!`
    }
  }
  return emph
}

const Calculator = {
    add: function add(num1, num2) {return num1 + num2},
    subtract: function subtract(num1, num2) {return num1 - num2},
    multiply: function multiply(num1, num2) {return num1 * num2},
    divide: function divide(num1, num2) {return num1 / num2}
}

function actionApplyer(startInt, arrayOfFunctions) {
  let result;
  for (const operator of arrayOfFunctions) {
    result = operator(result || startInt);
  }
  return result || startInt
}