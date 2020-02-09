// Your code here

function saturdayFun(str="roller-skate") {
  return `This Saturday, I want to ${str}!`
}

let mondayWork = (str="go to the office") => {
  return `This Monday, I will ${str}.`
}

function wrapAdjective(flair='*') {
  return function (encouragement="special") {
    return `You are ${flair}${encouragement}${flair}!`;
  }
};

const Calculator = {
  add(num1, num2) {
    return num1 + num2; 
  },
  subtract(num1, num2) {
    return num1 - num2; 
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2; 
  }
};

function actionApplyer(int, arr) {
  let a = int

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
};

