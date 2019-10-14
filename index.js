// Your code here
function saturdayFun(word = "roller-skate") {
  return `This Saturday, I want to ${word}!`
}

function mondayWork(word="go to the office") {
  return `This Monday, I will ${word}.`
}


function wrapAdjective(flair = "*", msg = "You are ") {
  return function (word = "special") {
  return `${msg}${flair}${word}${flair}!`
}
}

const Calculator = {
  add: function (a, b) {return a + b},
  subtract: function (a, b){return a-b},
  multiply: function (a, b){return a*b},
  divide: function(a,b){return a/b}
}

function actionApplyer (num, array) {
  for(let i=0; i < array.length; i++){
    num = array[i](num)
  }
  return num
}
