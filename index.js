function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`; // Including 'return' will help the function produce a string as the result
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(character="*") {
    return function(word="special") {
        return `You are ${character}${word}${character}!`
    }
}

const Calculator = {
    add: function(x, y) {
        return x + y
    },

    subtract: function(x, y) {
        return x - y
    },

    multiply: function(x, y) {
        return x * y
    },

    divide: function(x, y) {
        return x/y
    }
}

function actionApplyer(int, array) {
    let result = int // Take our starting value and assign it to a variable we can reuse
    
    if (array.length === 0){
        return result // If the array is empty, return our starting value
    }
    else { // If the array contains functions...
        for (let i = 0; i < array.length; i++) { // ...start a 'for' loop...
            result = array[i](result) // ...set our 'result' equal to the value returned by each function in the array.
        }
        return result // Once the final value is reached, we return that result.
    }
}

