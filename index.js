// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

// Implement a function called wrapAdjective:

// It should return a function
//     This "inner" function should:
//     take a single parameter that should default to "special".Name it however you wish.
// return a String of the form "You are ..." where ...should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")

function wrapAdjective(val = "*"){
    return function(param = "special"){
        return `You are ${val}${param}${val}!`
    }
}

const Calculator = {
    add: (a, b) => {
        return a + b
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        return a / b
    }
}

let actionApplyer = function( num , arr ){
    let s = num

    for (let i = 0; i < arr.length; i++) {
        s = arr[i](s)
    }

    return s
}