// Your code here

function saturdayFun(activity = "roller-skate") {
  return(`This Saturday, I want to ${activity}!`)
};


function mondayWork(activity = "go to the office") {
  return(`This Monday, I will ${activity}.`)
};

// let [answer, theBase] = (
//   function(thingToAdd, anotherThingtoAdd) {
//     let base = 3
//     return [
//       // sets answer to eq =>
//       function() { return base + thingToAdd },
//       // sets theBase to eq =>
//       function() { return base + anotherThingtoAdd}
//     ]
//   }
//   // because the whole function is enclosed in (), it invokes the whole thing.
// )(2, 1000)

// answer = function() {return base + trhingsToAdd} => whatever number + 3
// theBase = function() {return base} => just returns 3 + 1000
// parenthesis automatically invokes the functions

function wrapAdjective(flare = "*") {
  return function(input = "special"){
    return(`You are ${flare}${input}${flare}!`);
  };
};

const Calculator = {
  add: function(a, b){
    return(a + b);
  },
  subtract: function(a, b){
    return(a - b);
  },
  multiply: function(a, b){
    return(a * b);
  },
  divide: function(a, b){
    return(a / b);
  }
};

function actionApplyer(startingInteger, array) {
  if (array === undefined || array.length == 0) {
    return(startingInteger);
  } else {
    let newInteger = startingInteger;
    array.forEach( element => {
      newInteger = element(newInteger);
    });
    return(newInteger);
  }
};

// let actionApplyer = function(start, ray) {
//   let a = start
//
//   for (let i = 0; i < ray.length; i++ ){
//     a = ray[i](a)
//   }
//
//   return a
// }
