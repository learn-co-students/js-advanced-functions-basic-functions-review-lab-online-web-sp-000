// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(thisMonday="go to the office") {
    return `This Monday, I will ${thisMonday}.`;
}

function wrapAdjective(passIn="*") {
    return function(word="special") {
        return `You are ${passIn}${word}${passIn}!`;
    }
}

const Calculator = {

    add: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    }
}

function actionApplyer(int, arr) {
    let a = int

    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
}
