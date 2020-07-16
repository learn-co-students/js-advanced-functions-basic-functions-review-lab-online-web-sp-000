// Your code here
function saturdayFun( weekend = "roller-skate" ){
return (`This Saturday, I want to ${weekend}!`)
}
// we declare the function saturdayFun ()
// we use the default activity when no arugment is present
// we override the original activity `$weekend`
// function saturdayFun( weekend = "turn up"){
//   return (`This Saturday, I want to ${weekend}`)
// }

function mondayWork( job = "go to the office"){
  return (`This Monday, I will ${job}.`)
  // mondayWork()=> declared
  // job = "go to the office" ---->
  // gives user ability to override default activity
}

function wrapAdjective (flair = "*"){
  return function (word ="special")
  {
    return `You are ${flair}${word}${flair}!`
  }
}
// let x = 2
wrapAdjective("JavaScript")("sucks")


function outer(greeting, msg="It's a fine day to learn") {
  return function(name, lang="Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`
  }
}

outer("Hello")("student", "JavaScript")
//=> "Hello, student! It's a fine day to learn JavaScript"



const Calculator = {}


Calculator.add = function(x,y){
   return x + y
}

Calculator.add(1,3)

Calculator.subtract = function(x,y){
   return x - y
}

Calculator.subtract()

Calculator.multiply = function(x,y){
  return x*y
}

Calculator.multiply()

Calculator.divide = function(x,y){
   return x / y
}

Calculator.divide()

function actionApplyer(){

}

function actionApplyer(x, array){
  // step 1 set up parameters --> integer & array
  //step 2 figure out how to empty an array

  if (array.length == 0)
  // if array is empty return or give back same #
  {
    return x
  }

    else {


      let a = x
      // starting integer

      for (let i = 0; i < array.length; i++ ){
        a = array[i](a)
        // array (a)we declare the function i.e calling it
        // array[i] = we apply the function at what ever index its acting on
        // so the startin intergeris changing as it moves through the array of functions
      }
      return a
    // result of starting integer after going through array of functions till end

  }

}

//
//
//




// person.name = function () {
//   return this.firstName + " " + this.lastName;
// };
