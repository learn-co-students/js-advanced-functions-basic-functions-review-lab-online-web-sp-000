// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
}

let Calculator = {
    add: function(num1,num2){
        return num1 + num2
    },

    subtract: function(num1,num2){
        return num1 - num2
    },

    multiply: function(num1,num2){
        return num1 * num2
    },

    divide: function(num1,num2){
        return num1 / num2
    }
}

let actionApplyer = function(int, array) {
    if (array.length === 0) {
        return int
    } else {
        return (int * 2 + 1000) % 7
    }
}
