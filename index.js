// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight="*") {
    let visualFlair = function(adjective="") {
        return `You are ${highlight}${adjective}${highlight}!`
    }
    return visualFlair
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a,b){
    return a - b
  },
  multiply: function(a,b){
    return a * b
  },
  divide: function(a,b){
    return a/b
  },

}

function actionApplyer(integer, array) {
    if (array.length === 0) {
        return integer
    }
    for (let i = 0; i<array.length; i++) {
        integer=array[i](integer)
      }
      return integer
   }
   