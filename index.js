// Your code here
const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (task = 'go to the office') => {
    return `This Monday, I will ${task}.`
}

const wrapAdjective = (flair = '*') => {
    return ((param = 'special') => {
        return `You are ${flair}${param}${flair}!`
    })
}

const Calculator = {
    add: (x, y) => {
        return x + y 
    },

    subtract: (x, y) => {
        return x - y 
    },

    multiply: (x, y) => {
        return x * y 
    },

    divide: (x, y) => {
        return x/y 
    }
}

const actionApplyer = (int, fxArray) => {
    if (fxArray[0]){
        fxArray.forEach((fx) => {
            int = (fx)(int)
        })
        return int 
    }
    else  {
        return int 
    }
}