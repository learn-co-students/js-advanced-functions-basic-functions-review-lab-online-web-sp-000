// Your code here
function saturdayFun(activity = "roller-skate")
{
  return "This Saturday, I want to " + activity + "!";
}
function mondayWork(activity = "go to the office")
{
  return "This Monday, I will " + activity +".";
}
function wrapAdjective(outerParam = "*")
{
  return function(param = "special"){
    return "You are "+ outerParam + param + outerParam +"!"
  }
}

const Calculator = {};
Calculator.add = function(a, b){
  return a+ b;
}
Calculator.subtract = function(a, b){
  return a- b;
}
Calculator.multiply = function(a, b){
  return a*b;
}
Calculator.divide = function(a, b){
  return a/b;
}
function actionApplyer(start, functions)
{
  for(let i=0; i<functions.length; i++)
  {
    start = functions[i](start)
  }
  return start
}
