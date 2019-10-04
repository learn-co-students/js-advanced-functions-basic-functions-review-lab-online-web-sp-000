// Your code here
 function saturdayFun(argument = "roller-skate") {
  return (`This Saturday, I want to ${argument}!`);
 }

 let mondayWork = function (argument = "go to the office") {
  return (`This Monday, I will ${argument}.`);
 }

function wrapAdjective(flare = "*"){
  return function secondFunction(argument = "special"){
    return (`You are ${flare}${argument}${flare}!`);
  }
}

let Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}

function actionApplyer(integer, array){
  for (let i = 0; i < array.length; i++ ){
    integer = array[i](integer);
  }
return  integer;
}
