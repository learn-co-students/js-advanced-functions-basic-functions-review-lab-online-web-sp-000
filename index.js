// Your code here


function saturdayFun(activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
        
        return function (string = "special"){
            return `You are ${flair}${string}${flair}!`
        }
}

let Calculator = {
    add: (function (a, b){
        return a + b
    }), 
    subtract: (function (a, b){
        return a - b
    }), 
    multiply: (function (a, b){
        return a * b
    }), 
    divide: (function (a, b){
        return a/b
    })
};


function actionApplyer(start, array){
    let a = start
    for (let i = 0; i <array.length; i++){
        a = array[i](a)
    }

    return a


}