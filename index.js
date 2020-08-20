// Your code here
const saturdayFun = (activity = "roller-skate") => {return `This Saturday, I want to ${activity}!`}
const mondayWork = (activity = "go to the office") => {return `This Monday, I will ${activity}.`}

function wrapAdjective(flair = "*") {
    return function (special = "special") {
        return `You are ${flair}${special}${flair}!`
    }

}

const Calculator = {
    add: function(n1, n2) {return n1+n2},
    subtract: function(n1, n2) {return n1-n2},
    multiply: function(n1,n2) {return n1*n2},
    divide: function(n1,n2) {return n1/n2}
}

const actionApplyer = (i, arr) => {
    if (arr.size <= 0) {
        return i
    } else
    {
        arr.forEach(fn => i = fn(i))
        return i
    }
}