// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(asterix = "*"){
  return function (param = "special") {
    return `You are ${asterix}${param}${asterix}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3;
  },
  subtract: function() {
    return 1 - 3;
  },
  multiply: function() {
    return 1 * 3;
  },
  divide: function() {
    return 10 / 5;
  }
}

function actionApplyer(integer, array){
  if (array.length === 0 ){
    return integer
  }
  else {
    let newInteger = integer
    for (let i = 0; i < array.length; i++){
      newInteger = array[i](newInteger)
    }
    return newInteger
  }
}
