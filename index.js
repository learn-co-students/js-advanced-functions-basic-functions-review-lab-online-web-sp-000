// Your code here

function saturdayFun(activity="roller-skate"){  
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*"){
  return function(message="special"){
    return `You are ${visualFlair}${message}${visualFlair}!`
  }
}

let Calculator = {};
Calculator.add = function(var1, var2){
  return var1 + var2;
}
Calculator.subtract = function(var1, var2){
  return var1 - var2;
}
Calculator.multiply = function(var1, var2){
  return var1 * var2;
}
Calculator.divide = function(var1, var2){
  return var1 / var2;
}

function actionApplyer(startingInt, startingArray){
  let myReturn = 0;
  if (startingArray.length != 0){
    let fn = startingArray[0];
    let result = fn(startingInt);
    for (let i = 1; i < startingArray.length; i++){
      fn = startingArray[i]
      result = fn(result);
   }
   myReturn = result;
  }
  return myReturn;
}