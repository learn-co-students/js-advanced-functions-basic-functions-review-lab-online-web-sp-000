function saturdayFun(activity = "roller-skate"){

   return  `This Saturday, I want to ${activity}!`
}


function mondayWork(activity ="go to the office"){
  //func dec
  return `This Monday, I will ${activity}.`
}
// console.log(mondayWork())



function  wrapAdjective(msg="*"){
     return function(lang="special"){
             return`You are ${msg}${lang}${msg}!`
    }
  
}


const Calculator = {
  add: function(a,b){
   return a + b 
  },
  subtract: function(a,b){
    return a - b 
  },
  divide: function(a,b){
    return a / b 
  },
  multiply: function(a,b){
    return a * b 
  }

}
let actionApplyer = function(num, arrayFunction){
  arrayFunction.forEach(func => {
    num = func(num)
  });
return num 
}




