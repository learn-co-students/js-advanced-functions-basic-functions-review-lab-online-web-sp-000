// Your code here

//Regular declaring and calling of a function
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun(activity);

//Function expression (SEE NOTES BELOW)
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

mondayWork(activity);

//Test is not passing a true function expression
//Below is how to correctly write a function expression
// let mondayWork = function (activity="go to the office") {
//     return `This Monday, I will ${activity}.`
// };

// mondayWork(activity);

function wrapAdjective(string="*") {
    return function(param="special") {
        return `You are ${string}${param}${string}!`
    }
};

const Calculator = {
    add: function(num1, num2) {
      return num1 + num2
    },
    subtract: function(num1, num2) {
      return num1 - num2
    },
    multiply: function(num1, num2) {
      return num1 * num2
    },
    divide: function(num1, num2) {
      return num1 / num2
    }
  }


// const Calculator = {
//     add: (a,b) => a + b,
//     subtract: (a,b) => a - b,
//     multiply: (a,b) => a * b, 
//     divide: (a,b) => a / b
// }

function actionApplyer (start, arr) {
    let a = start
    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a);
    }
    return a;
}