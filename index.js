
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
} 

const Calculator = {

    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}



let actionApplyer = function(start, array) {
    let a = start 

    for (let i = 0; i < array.length; i++ ){
        a = array[i](a)
    }

    return a
}