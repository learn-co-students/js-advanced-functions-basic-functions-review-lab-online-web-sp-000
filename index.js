// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(sign="*"){
  return function(adj){
    return `You are ${sign}${adj}${sign}!`
  }
}

let Calculator = {}
Calculator.add = (a,b)=>{return a+b}
Calculator.subtract = (a,b)=>{return a-b}
Calculator.multiply = (a,b)=>{return a*b}
Calculator.divide = (a,b)=>{return a/b}

function actionApplyer(int,array){
  if (array.length === 0){return 0}
  else {
      let a = int
      for (let i = 0; i < array.length; i++ ){
        a = array[i](a)
      }
      return a
  }
}
