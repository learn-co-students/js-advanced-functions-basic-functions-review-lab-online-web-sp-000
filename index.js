function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(visual ='*'){
  return function(special = 'special'){
    return `You are ${visual}${special}${visual}!`
  }
}

let Calculator = {add: function(num1, num2){
  return num1 + num2;
  }, 
  subtract: function(num1, num2){
    return num1 - num2;
  },
  multiply: function(num1 = 1, num2 = 3){
    return num1 * num2;
  }, 
  divide: function(num1 = 10, num2 = 5){
    return num1 / num2;
  }
}

let actionApplyer = function(startingNum, fArr){
  let num = startingNum;
  
  for (let i = 0; i < fArr.lenght; i++){
    num = fArr[i]
  }
  return num;
}