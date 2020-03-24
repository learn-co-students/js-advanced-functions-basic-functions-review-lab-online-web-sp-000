function saturdayFun(activity='roller-skate') {
  return 'This Saturday, I want to ' + activity + '!'
}

function mondayWork(activity='go to the office') {
  return 'This Monday, I will ' + activity + '.'
}

function wrapAdjective(character="*") {
  return function(message="special") {
    return "You are " + character + message + character + "!"
  }
}

let Calculator = {
  add(){return 1 + 3},
  subtract(){return 1 - 3},
  multiply(){return 1 * 3},
  divide(){return 10 / 5}
  }

function actionApplyer(startingInteger, array) {
    array.forEach(func => {
      startingInteger = func(startingInteger)
    })
    return startingInteger
}
