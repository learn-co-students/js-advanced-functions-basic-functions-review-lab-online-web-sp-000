function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(work='go to the office'){
  return `This Monday, I will ${work}.`
}

function wrapAdjective(flair='*'){
  return function(adj='special'){
    return `You are ${flair}${adj}${flair}!`
  }
}

let Calculator = {
  add: function(num1, num2){ return num1 + num2 },
  subtract: function(num1, num2){ return num1 - num2 },
  multiply: function(num1, num2){ return num1 * num2 },
  divide: function(num1, num2){ return num1 / num2 }
}

function actionApplyer(int, funcs){
  let finalVal = int
  funcs.forEach(func => {
    finalVal = func(finalVal)
  })
  return finalVal
}
