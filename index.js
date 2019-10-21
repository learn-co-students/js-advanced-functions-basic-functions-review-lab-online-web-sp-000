// Your code here

// 1. Function Declaration
function saturdayFun(activity='roller-skate') {
   return `This Saturday, I want to ${activity}!`;
}


// 2. Function Expression
const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`;
}

mondayWork();                          // This Monday, I will go to the office.
mondayWork("go to the gym");           // This Monday, I will go to the gym.


// 3. Frozen Function
const wrapAdjective = function(wrap='*') {
   return function(adj='intuitive') {
      return `You are ${wrap}${adj}${wrap}!`
   }
}

// function wrapAdjective(wrap='*') {
//    return function(adj='determined') {
//       return `You are ${wrap}${adj}${wrap}!`
//    }
// }

wrapAdjective();                       // function wrapAdjective()


// 4. Functions As Object Values
const Calculator = {
   add: function(x, y) {
      return x + y;
   },
   subtract: function(x, y) {
      return x - y;
   },
   multiply: function(x, y) {
      return x * y;
   },
   divide: function(x, y) {
      return x / y;
   }
}


// 5. IIFE
let actionApplyer = function(start, arrOfFun) {

   for(let i=0; i < arrOfFun.length; i++) {
      start =  arrOfFun[i](start);
   }

   return start;
}
