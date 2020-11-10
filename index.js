// Your code here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work= "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(highlight = "*"){

    return function(job = "specialize"){

            return `You are ${highlight}${job}${highlight}!`

    }
}

function add(a, b){
    return a + b
}

let Calculator = {
    add: function(a,b){
       return a + b
    }, 
    subtract: function(a, b){
        return a - b
    },

    multiply(a, b){
        return a * b
    }, 
    divide(a,b){
        return a/b}

}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }