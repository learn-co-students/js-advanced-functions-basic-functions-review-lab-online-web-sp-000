// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(plan = 'go to the office'){
    return `This Monday, I will ${plan}.`
}

function wrapAdjective(string = '*'){
    return function(type = 'special'){
        return `You are ${string}${type}${string}!`
    }
}

let Calculator = {
    add: function(){
        return 1+3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1*3
    },
    divide: function(){
        return 10/5
    }

}

function actionApplyer(int, arr){
    let newInt = int 
    arr.forEach(element => {
        newInt = element(newInt)        
    })
    return newInt
}


