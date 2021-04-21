// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (
  function(char = "*") {
    return function(emphatic = "special") {
      return `You are ${char}${emphatic}${char}!`
    }
  }
)

const encouragingPromptFunction = wrapAdjective("!!!");

const Calculator = {
  result: 0,
  add(num1, num2) {
    return this.result = num1 + num2;
  },
  subtract(num1, num2) {
    return this.result = num1 - num2;
  },
  multiply(num1, num2) {
    return this.result = num1 * num2;
  },
  divide(num1, num2) {
    return this.result = num1 / num2;
  }
};

function actionApplyer(start, functionList) {
    let num = start;
    for (let i = 0; i < functionList.length; i++) {
      num = functionList[i](num);
    }
    return num
}
