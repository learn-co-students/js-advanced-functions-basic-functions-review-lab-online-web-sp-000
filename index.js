import { wrap } from "module"

// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}


// function saturdayFun() {
//     console.log("This Saturday, I want to bathe my dog!")
// }
// saturdayFun("I want to bathe my dog!")


function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(initialized= "*") {
    return function (adjective='result') {
        return `You are ${initialized}${adjective}${initialized}!`
    }
}

//defines an object called Calculator 
const Calculator = {
    // that has a function called add 
    // Calculate.add exists
    add: function (a, b) {
        // calculates 1+3
        return a + b;
    },
    // calculate.subtract exists
    subtract: function (a, b) {
        //  calculates 1-3
        return a - b
    },
    // calculate.multiply exists
    multiply: function (a, b) {
        // calculates 1 * 3
        return a * b
    },
    // Calculator.divide exists
    divide: function (a, b) {
        // calculates 10 / 5
        return a / b;
    }
}


function actionApplyer(startPoint, array) {
    let a = startPoint

    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }

    return a
}
