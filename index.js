// Your code here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
 return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual_Flare = "*"){
  return function innerF(especial = "special" ){
    return `You are ${visual_Flare}${especial}${visual_Flare}!`
  }
}

const Calculator = 
{ add: function add(num1, num2) 
  { 
    return num1 + num2 
  },
  subtract: function subtract(num1, num2)
  {
    return num1 - num2
  },
  multiply: function multiply(num1, num2)
  {
    return num1 * num2
  },
  divide: function divide(num1, num2)
  {
    return num1 / num2
  }
} 

function actionApplyer(start, functions){
  if (functions.length == 0){
    return start
  }else{
    return functions[2]((functions[1](functions[0](start))))
  }
}