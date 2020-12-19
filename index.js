let saturdayFun = function(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10 / 5}
}
  
function actionApplyer(startingInteger, arrOfFunc) {
    for(let i = 0; i < arrOfFunc.length; i++) {
      startingInteger = arrOfFunc[i](startingInteger)
    }
    
    return startingInteger
}