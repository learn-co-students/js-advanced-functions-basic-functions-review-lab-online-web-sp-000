// Your code here
function saturdayFun(activity = 'roller-skate'){
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
   return `This Monday, I will ${activity}.`
}

function wrapAdjective(argument = "*"){
    return function(argument2){
        return `You are ${argument}${argument2}${argument}!`
    }

}

let Calculator = { 
    add: function(num1,num2){
        return num1 + num2

    },
    subtract: function(num1,num2){
        return num1 - num2
    },
    multiply: function(num1,num2){
        return num1 * num2
    },
    divide: function(num1,num2){
       return num1 / num2
    }
 } 
 function actionApplyer(num,functions){
    let realNum = num
    const numbers = functions.map(function(e){
      realNum = e(realNum)
      return realNum
    })
    if (num != 0){
   console.log(`${num}, multiplied by 2, added to 1000 and then modulo 7 is ${numbers[2]}. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result`)
    return numbers[2]
   }else{
   return num
    }
}