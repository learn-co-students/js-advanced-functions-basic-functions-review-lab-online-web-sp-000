function saturdayFun (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork (task = "go to the office") {
  return `This Monday, I will ${task}.`
}

let wrapAdjective = function (style = "*") {
  return function (adj = "special"){
    return `You are ${style}${adj}${style}!`
  }
}

const Calculator = {
  add: function (a, b) {
    return (a + b)
  },
  subtract: function (a, b) {
    return (a - b)
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  }
}

let actionApplyer = function(integer, array) {
  let a = integer

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}
