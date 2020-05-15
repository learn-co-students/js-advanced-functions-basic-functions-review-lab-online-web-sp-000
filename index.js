function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function(desc = "special") {
    return `You are ${flair}${desc}${flair}!`
  }
}

let Calculator = {add: function add() {
  return 1 + 3
}, 
subtract: function subtract() {
  return 1 - 3
},
multiply: function multiply() {
  return 1 * 3
},
divide: function divide() {
  return 10 / 5
}}

let actionApplyer = function(integer, array) {
  for (let i = 0; i < array.length; i++) {
    integer = array[i](integer)
  }

  return integer
}