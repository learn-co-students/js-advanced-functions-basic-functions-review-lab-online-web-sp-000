// Your code here
//
// function thisIsDeclaration(){
//
// } //here you are declaring a function, but in order to execute the code in between, you need to call it using ()
//
// //if you simply refer to a fucntion in the console,terminal, or another part of the code, you will simply just return the function definition (contents within the function), but if oyu want to return a specific value of that funciton, you need to invoke the function
//
// function() {
//   console.log('hi')
// } //this is an annonymous function ebcause there is no name

//#task 1

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

//tasks 2
function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`

}

//task 3
function wrapAdjective(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: function(num1, num2){return num1+num2},
  subtract: function(num1, num2){return num1-num2},
  multiply: function(num1, num2){return num1*num2},
  divide: function(num1, num2){return num1/num2}
}

function actionApplyer(num, functions){
  let a = num

  for(let i=0; i<functions.length; i++){
    a = functions[i](a)
  }
  return a
}
