// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

mondayWork('work from home')

function wrapAdjective (highlight = '*') {
  return function (whatever = 'special') {
    return `You are ${highlight}${whatever}${highlight}!`
  }
}

const Calculator = {
  add: function (one, three) {
    return one + three
  },
  subtract: function (one, three) {
    return one - three
  },
  multiply: function (one, three) {
    return one * three
  },
  divide: function (ten, five) {
    return ten / five
  }
}

function actionApplyer(int, arr) {
  let a = int

  for (let i = 0; i < arr.length; i++) {
    a = arr[i](a)
  }
  return a
}