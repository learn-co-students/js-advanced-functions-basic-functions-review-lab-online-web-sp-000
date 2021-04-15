// Your code here
function saturdayFun(x = "roller-skate"){
    return `This Saturday, I want to ${x}!`
}

function mondayWork(x = "go to the office"){
    return `This Monday, I will ${x}.`
}

function wrapAdjective(x = "*"){
    return (function(y = "special"){
        return `You are ${x}${y}${x}!`
    })
}

const Calculator = {
    add: (function(x, y){
        return x + y
    }),
    subtract: (function(x, y){
        return x - y
    }),
    multiply: (function(x, y){
        return x * y
    }),
    divide: (function(x, y){
        return x / y
    })
}

function actionApplyer(int, arr){
    for (const i of arr){
        console.log(arr)
        console.log(i)
        int = i(int)
    }
    return int
}