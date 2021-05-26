// Your code here
function saturdayFun(thing = "roller-skate") {
    return `This Saturday, I want to ${thing}!`
}

function mondayWork(thing = "go to the office") {
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }

}

const Calculator = {
    add:
        function (x, y) {
            return x + y
        }
    ,
    subtract:
        function (x, y) {
            return x - y
        },
    multiply:
        function (x, y) {
            return x * y
        },
    divide:
        function (x, y) {
            return x / y
        }
}

function actionApplyer(start, args) {
    if (args.length > 0) {
        args.forEach(fn => {
            start = fn(start)
        })
    }
    return start
}