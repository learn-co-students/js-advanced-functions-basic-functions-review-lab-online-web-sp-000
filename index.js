// Your code here
function  saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`;
}
let mondayWork = function(event = 'go to the office') {
    return `This Monday, I will ${event}.`;
  }

let wrapAdjective = function(top = '*') {
    return function(data = 'special'){
        return `You are ${top}${data}${top}!`;
    }
}

let Calculator = {
    add: (a,b) => { return a+b },
    subtract: (a,b) => { return a-b },
    multiply: (a,b) => { return a*b },
    divide: (a,b) => { return a/b }
}

let actionApplyer = (start, arr) => {
    arr.forEach(element => { start = element(start)});
    return start
}