// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(char="*") {
    return function(adjective="special") {
      return `You are ${char}${adjective}${char}!`
    }
}

const Calculator = {
    add: function(num1,num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },

    multiply: function(num1, num2) {
        return num1 * num2
    },

    divide: function(num1, num2) {
        return num1/num2
    }
}

function actionApplyer(int, array) {
    let result = int
    
    if (array.length === 0){
        return result
    }
    else { 
        for (let i = 0; i < array.length; i++) {
            result = array[i](result)
        }
        return result
    }
}