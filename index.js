// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair='*') {
    return function(adjective='special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {return num1 + num2}, 
    subtract: function(num1, num2) {return num1 - num2},
    multiply: function(num1, num2) {return num1 * num2},
    divide: function(num1, num2) {return num1 / num2}
}

function actionApplyer(startInt, funcArr) {
    let result = startInt; 
    for(let i=0; i < funcArr.length; i++) {
        result = funcArr[i](result); 
    }
    return result 
}