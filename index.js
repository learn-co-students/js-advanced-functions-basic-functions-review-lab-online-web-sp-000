// Your code here
function saturdayFun(action='roller-skate'){
    return `This Saturday, I want to ${action}!`
}

function mondayWork(action='go to the office'){
    return `This Monday, I will ${action}.`
}

function wrapAdjective(arg="*"){
    return function (adj="special"){
        return `You are ${arg}${adj}${arg}!`
    }

}

const Calculator = {
    add: function(a,b) {
        return a+b
    },
    subtract: function(a,b) {
        return a-b
    },
    multiply: function(a,b) {
        return a*b
    },
    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(start,fxs){
    for (let i=0;i<fxs.length;i++){
        start = fxs[i](start)
    }
    return start
}

