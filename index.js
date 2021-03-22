const Calculator = {
    add: function(a,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a / b}
}


function saturdayFun(str = "roller-skate"){
    return `This Saturday, I want to ${str}!`
}

let mondayWork = function(str = "go to the office"){
    return `This Monday, I will ${str}.`
}


wrapAdjective = (sta = "*") => {
    return function innerFunction(str = "special"){
        return "You are " + `${sta}` + `${str}` + `${sta}` + "!"
    }    
}

function actionApplyer(int,arr){
    for(let i = 0; i < arr.length;i++){
        int = arr[i](int)
    }
    return int
}


Calculator()
saturdayFun()
mondayWork()
wrapAdjective()
actionApplyer()
