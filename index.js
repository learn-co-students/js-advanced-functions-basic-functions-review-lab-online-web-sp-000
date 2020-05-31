// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){
  return function(adj = "special"){
    return `You are ${flair}${adj}${flair}!`;
  }
}

const Calculator = {
  add: function(num1, num2){
    return num1 + num2;
  },

  subtract: function(num1, num2){
    return num1 - num2;
  },

  multiply: function(num1, num2){
    return num1 * num2;
  },

  divide: function(num1, num2){
    return num1 / num2;
  }
}

function actionApplyer(startingInt, fnArray = []){
  if (fnArray.length < 1){
    return startingInt;
  }

  let result = startingInt;
  let message = `${startingInt}, `;
  fnArray.forEach(fn => {
    result = fn(result);
  });
  message += `multiplied by 2, added to 1000 and then modulo 7 is ${result}. Apply each function in the Array of functions on the given base (${startingInt}) OR on the result of the use of the previous function to get this result`;
  //return [result, message];
  return result;
}
