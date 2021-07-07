// Your code here
function saturdayFun(str="roller-skate") {
  return `This Saturday, I want to ${str}!`;
}
saturdayFun()


function mondayWork(str="go to the office"){
  return `This Monday, I will ${str}.`
}
mondayWork()


function wrapAdjective(style="*"){
  return function(str="special"){
    return `You are ${style}${str}${style}!`;
  }
}


let Calculator = {
add: function(a, b){
  return a + b;
},
subtract: function(a, b){
  return a - b;
},
multiply: function(a, b){
  return a * b;
},
divide: function(a, b){
  return a / b;
}
}


// -----------------------------last problem which i dont understand
// THIS MAKES NO SENSE TO ME
let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}

// This is my code to the problem above but i can not figure it out.
// I have tried numerous ways of writing this code but not making sense to me.
// function actionApplyer(x, fns) {
// 		return (x * 2 + 1000) % 7;
// 	}	
// }
// actionApplyer(13);

// function actionApplyer(x, fns) {
//   if (fns == undefined || fns.length == 0){
//     return x;
//   }
// }
// actionApplyer(13)