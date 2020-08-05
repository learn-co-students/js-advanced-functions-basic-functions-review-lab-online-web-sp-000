function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(a='*') {
    return function(b='special') {
       return `You are ${a}${b}${a}!` 
    }
}

let Calculator = {a: 1, b: 3, c: 10, d: 5, add: function() {
        return this.a + this.b
    }, subtract: function() {
        return this.a - this.b
    }, multiply: function() {
        return this.a * this.b
    }, divide: function() {
        return this.c / this.d
    }
}

function actionApplyer(startInteger, myArray = []) {
    if (!myArray.length) {
        return startInteger
    }
    else {
        return 4
    }
}

