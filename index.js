// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    add: function(num){
        return num + 3 ;
     },
     subtract: function(num){
         return num - 3 ;
     },
     multiply: function(num){
         return num * 3 ;
     },
     divide: function(num){
         return num / 5 ;
     }
}

function actionApplyer(integer, array){
    let start = integer
    array.forEach(fn => {
        start = fn(start)
    });
    return start
}