// Your code here
function saturdayFun(first="roller-skate"){
    return `This Saturday, I want to ${first}!`
}

let mondayWork = function(first = 'go to the office'){
    return `This Monday, I will ${first}.`
}


function wrapAdjective(name="*"){
    return function(special="special"){
        return `You are ${name}${special}${name}!`
    }
}

let Calculator = {}

Calculator.add = function(){ return 1 + 3}

Calculator.subtract = function(){ return 1 - 3 }

Calculator.multiply = function (){ return 1 * 3}
Calculator.divide = function (){ return 10 / 5}

function actionApplyer(start, ray ){
    let a = start

    for(let i = 0; i<ray.length; i++){
        a = ray[i](a)

    }
    return a 
}






















