// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
 

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair= "*"){
    return function(something = "special"){
        return `You are ${flair}${something}${flair}!`
    }
}

let encouragingPromptfunction = wrapAdjective("!!!")()
console.log(encouragingPromptfunction)


const Calculator = {
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b},
}

console.log(Calculator.add(1,1))

function actionApplyer(startInt = 0, fArray){
    if (!fArray || fArray.length === 0){
        return startInt
    }
    
    for (let i = 0; i < fArray.length; i++){
        startInt =+ fArray[i](startInt)
    }
    return startInt
    
}

console.log(actionApplyer())
