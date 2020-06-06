// Your code here

function saturdayFun(a="roller-skate"){
  return `This Saturday, I want to ${a}!`;
}

function mondayWork(a="go to the office"){
  return `This Monday, I will ${a}.`
}

function wrapAdjective(s="*"){
  return function(a="special"){
    return `You are ${s}${a}${s}!`;
  }
}

let Calculator = {
  add:
  function add(a,b){
    return a + b;
  },
  subtract:
  function subtract(a,b){
    return a - b;
  },
  multiply:
  function multiply(a,b){
    return a * b;
  },
  divide:
  function divide(a,b){
    return a / b;
  },
};


function actionApplyer(integer, array){
let a = integer;
  if (array != 0){
      for (let i=0; i<array.length; i++){
         console.log(a);
          a =  array[i](a);
      }
  } else return 0;
  return a;
}
