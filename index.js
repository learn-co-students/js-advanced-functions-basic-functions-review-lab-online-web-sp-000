// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(str='*') {
  return function(adj='special') {
    return `You are ${str}${adj}${str}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a+b
  },
  subtract: function(a,b) {
    return a-b
  },
  multiply: function(a,b) {
    return a*b
  },
  divide: function(a,b) {
    return a/b
  }
}

let actionApplyer = function(start, funcArray) {
  let x = start
  for (let i = 0; i < funcArray.length; i++ ){
    x = funcArray[i](x)
  }
  return x
}
