function saturdayFun(activity='roller-skate') {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
   return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair = '*'){
    return function(def = 'special') {
        return `You are ${flair}${def}${flair}!`
    }
}

let Calculator = {
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(startInteger, fnArray){
    let x = startInteger
    for (let i = 0; i < fnArray.length; i++){
      x = fnArray[i](a)
    }
    return x
}