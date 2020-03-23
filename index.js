function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(description="special") {
        return `You are ${flair}${description}${flair}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a+b
    },
    subtract: function(a,b) {
        return a-b
    },
    multiply: function(a,b) {
        return a*b
    },
    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(start, array) {
    let a = start
    if (array.length>0) { 
        for (let i = 0; i < array.length; i++) {
            a = array[i](a)
        }
    }
    return a 
}