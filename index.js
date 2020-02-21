function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(character = "*", ) {
    return function(feeling= "special", ) {
        return `You are ${character}${feeling}${character}!`
    }
}

let Calculator = {
    add(a, b){return a + b},
    subtract(a, b){return a - b},
    divide(a, b){return a / b},
    multiply(a, b){return a * b}
};


function actionApplyer(startInt, arrOfFunctions){
    let numA = startInt
    for(let i = 0; i < arrOfFunctions.length; i++){
        numA = arrOfFunctions[i](numA)
    }
    return numA
}