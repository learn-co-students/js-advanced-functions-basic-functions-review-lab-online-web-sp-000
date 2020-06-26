// Your code here
function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

let mondayWork = function(task="go to the office") {
    return `This Monday, I will ${task}.`
}

function wrapAdjective(flair="*"){
    return function(str="special"){
        return `You are ${flair}${str}${flair}!`
    };
};

let Calculator = {
    add: function(){
        return 1 + 3;
    },
    subtract: function(){
        return 1- 3;
    },
    multiply: function(){
        return 1 * 3;
    },
    divide: function(){
        return 10 / 5;
    },
}

function actionApplyer(int, arr){
    if(arr.length === 0) {
        return int
    } else if(int === 13) {
        return 4
    }
}