
const saturdayFun = (arg = 'roller-skate') => {
    return `This Saturday, I want to ${arg}!`
}


function mondayWork(todo = "go to the office"){
    return `This Monday, I will ${todo}.`
}

const wrapAdjective = (wrapper = "*") => {
    return function(arg = 'special'){
        return `You are ${wrapper}${arg}${wrapper}!`
    }
}

const Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b, 
    divide: (a,b) => a / b
}

const actionApplyer = (int, fns) => {
    let currVal = int
    console.log(fns)
    for(let fn of fns){
        currVal = fn(currVal)
    }
    return currVal
}