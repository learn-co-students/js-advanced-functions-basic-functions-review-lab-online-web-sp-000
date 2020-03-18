function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
 }

 const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
 }

 function wrapAdjective(flair = "*"){
        return function innerFn(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
        }
 }

 const Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
 }
 
 function actionApplyer(startingInt, arrayOfFn) {
    if (arrayOfFn.length === 0) {
       return startingInt
    } else {
       let updatedInt = startingInt
       arrayOfFn.forEach(fn => {
          updatedInt = fn(updatedInt); 
       })
       return updatedInt
    }
 }