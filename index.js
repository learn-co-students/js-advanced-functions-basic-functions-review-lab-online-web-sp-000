// Your code here
//1.
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

//2.
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

//3.
let wrapAdjective = function(style="*") {
  return function(parameter="special"){
    return `You are ${style}${parameter}${style}!`
  }
}

//4.
const Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}

//5.
let actionApplyer = function(start, ray){
  let a = start

  for (let i = 0; i < ray.length; i++){
    a = ray[i](a)
  }

  return a
}


//NOTES:
//`const` is a signal that the identifier won't be reassigned. `let` is a signal that the variable may be reassigned,
// such as a counter in a loop, or a value swap in an algorithm.
// It also signals that the variable will be used only in the block it's defined in, which is not always the entire containing function
