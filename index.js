// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(arg = "*"){
    return function inner(message = "special"){
        return `You are ${arg}${message}${arg}!`
    }
}

const Calculator = {
    add(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    },
    multiply(a, b){
        return a * b;
    },
    divide(a, b){
        return a / b;
    }
}

function actionApplyer(start, array){
    let s = start;

    for (let i = 0; i < array.length; i++ ){
    s = array[i](s)
    }

    return s;
}
