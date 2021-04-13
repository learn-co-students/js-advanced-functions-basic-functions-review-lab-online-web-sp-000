// Your code here
function saturdayFun(activity= "roller-skate"){
    return`This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity= 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(parameter= "*"){
    return function(adjective= "special"){
        return `You are ${parameter}${adjective}${parameter}!`
    }
}

const Calculator = {
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b} 
}

const actionApplyer = function(startInt, arrayOfFunc){
    let actingInt = startInt
    // for(let i = 0; i < arrayOfFunc.length; i++){
    //    actingInt = arrayOfFunc[i](actingInt)
    // }

    for(const rayFunc of arrayOfFunc){
        actingInt = rayFunc(actingInt)
    }

    return actingInt
    
}

// didn't know how to do the action player so i looked it up and rewrote it in a different way