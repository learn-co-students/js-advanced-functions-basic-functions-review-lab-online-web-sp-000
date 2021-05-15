// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

var Calculator = {
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num3, num4) {
        return num3 - num4
    },
    multiply(num5, num6) {
        return num5 * num6
    },
    divide(num7, num8) {
        return num7 / num8
    }
}

function actionApplyer(int, arr) {
    if(arr.length === 0) {
        return int
    }
    else {
        for(let i=0; i < arr.length; i++) {
            int = arr[i](int)
        }
        return int
    }
}
