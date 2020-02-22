// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
    return function(adj = "special") {
        return `You are ${string}${adj}${string}!`
    }
}

let Calculator = {
    "add": function(first, second){
        return first + second
    }, 
    "subtract": function(first, second){
        return first - second
    },
    "multiply": function(first, second){
        return first * second
    },
    "divide": function(first, second){
        return first / second
    }
}

function actionApplyer(start, array) {
    if (array.length > 0) {
        array.forEach(element => {
            start = (element)(start)
        })
        return start
    } else {
        return start
    }
}