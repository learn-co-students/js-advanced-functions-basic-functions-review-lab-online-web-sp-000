// Your code here
function saturdayFun (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

function mondayWork (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
};

let wrapAdjective = (
  function(var1 = "*") {
      return function(var2 = "special") {
        return `You are ${var1}${var2}${var1}!`
    }
  })


let Calculator = {
  add:
  function(numb1, numb2){
      return numb1+numb2
    }, 
  subtract:
  function(numb1, numb2){
      return numb1-numb2
    },
  multiply:
  function(numb1, numb2){
      return numb1*numb2
    },
  divide:
  function(numb1, numb2){
      return numb1/numb2
    }
  }

  let arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }