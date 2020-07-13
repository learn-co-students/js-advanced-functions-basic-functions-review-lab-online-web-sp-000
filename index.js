function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(string= "*"){
    return function(special= "special"){
        return `You are ${string}${special}${string}!`
    }
}


let Calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    }
}


function actionApplyer(startingInt, funcArray){
    let result = startingInt
    for(let i = 0; i < funcArray.length; i++){
        result = funcArray[i](result)
    }
    return result
}
