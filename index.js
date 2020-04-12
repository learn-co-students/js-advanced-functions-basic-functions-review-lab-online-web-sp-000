// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
  return function(wish = 'special'){
    return `You are ${flair}${wish}${flair}!`
  }
}

const Calculator = {
  add: function(num1, num2){
    return num1 + num2
  },
  subtract: function (n, m){
    return n - m
  },
  multiply: function(n, m){
    return n * m
  },
  divide: function(n, m){
    return n/m
  }
}

function actionApplyer(start, arrayOfActions){
   for(const action of arrayOfActions){
     start = action(start)
   } 
   return start
}