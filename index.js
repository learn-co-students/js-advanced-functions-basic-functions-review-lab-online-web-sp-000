// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = "*"){
    return function(title = "special"){
        return `You are ${string}${title}${string}!`;
    }
}
let Calculator = {
    add: function add(){
        return 1 + 3;
    },
    subtract: function subtract(){
        return 1 - 3;
    },
    multiply: function multiply(){
        return 1 * 3;
    },
    divide: function divide(){
        return 10/5;
    }
};

function actionApplyer(start, arr){
    debugger
    if(arr.length === 0){
        return start
    } else {
        return arr[2](arr[1](arr[0](start)));
    }
}