// Your code here
function saturdayFun(action = "roller-skate"){
  return  `This Saturday, I want to ${action}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
   return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function(a, b){return a + b },
    subtract: function(a, b){return a - b },
    multiply: function(a, b){return a * b },
    divide: function(a, b){return a / b }
}

function actionApplyer(start, array){
for(const act of array){
 start = act(start);
}
return start
}