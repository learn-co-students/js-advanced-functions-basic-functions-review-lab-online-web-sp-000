function saturdayFun(activity='roller-skate') {
return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') { 
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*") {
    return function(value="special") {
        return `You are ${style}${value}${style}!`
    }
}


const Calculator =  {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(int, arr) {
let count = int

for (let i = 0; i < arr.length; i++) {
count = arr[i](count)
}

return count

}



