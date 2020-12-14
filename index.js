function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(flair = "*"){
    return function(special = "a wonderful violist"){
        return `You are ${flair}${special}${flair}!`
    }
}

let Calculator = {
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


let actionApplyer = function(integer, functionArray) {
    let answer = integer

    functionArray.forEach(operation => {
        answer = operation(answer)
    });
    return answer
}
