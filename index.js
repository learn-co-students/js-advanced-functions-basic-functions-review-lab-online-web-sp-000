function saturdayFun(activity ="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair="*") {
    return function(adj="special") {
        return `You are ${visualFlair}${adj}${visualFlair}!`;
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

function actionApplyer(startingPoint, arrayFunctions) {
    if (arrayFunctions.length === 0) {
        return startingPoint
    }
    else {
        let actingFunction = arrayFunctions[0]
        let resulted = actingFunction(startingPoint)
        return actionApplyer(resulted, arrayFunctions.slice(1))
    }
}

