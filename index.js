// Your code here
function saturdayFun(str = "roller-skate"){
  return `This Saturday, I want to ${str}!`
}

let Calculator = {
  add: function(){
    return 1+3
  },
  subtract: function(){
    return 1-3
  },
  multiply: function(){
    return 1*3
  },
  divide: function(){
    return 10/5
  }
}


let mondayWork = function(str = "go to the office") {
  return `This Monday, I will ${str}.`
}

function wrapAdjective(str="*") {
  return function(param = "special"){
    return `You are ${str}${param}${str}!`
  }
}


function actionApplyer(int, arrOfFn){
  let result = int;

  if(arrOfFn.length === 0){
    return int
  } else {
    for(let i = 0; i < arrOfFn.length; i++){
      result = arrOfFn[i](result);
    }
    return result
  }
}
