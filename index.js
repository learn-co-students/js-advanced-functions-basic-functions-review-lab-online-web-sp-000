// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*") {
  return function inner(adj = "special") {
      return `You are ${str}${adj}${str}!`
  }
}

let Calculator = { 
    add : function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
};

function actionApplyer(num, arr) {
   for (let i = 0; i < arr.length; i++) {
      num = arr[i](num);
   }
   return num;
}
