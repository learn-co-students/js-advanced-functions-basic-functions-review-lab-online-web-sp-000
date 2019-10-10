// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(marker='*') {
    return function(adj) {
        return `You are ${marker}${adj}${marker}!`
    }
}

const Calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
 }

 function actionApplyer(startInt, arrayFunc) {
    if (arrayFunc.length == 0) {
        return startInt
    } else {
        arrayFunc.forEach(f => {
            startInt = f(startInt)
            });
        return startInt;
    }

}
