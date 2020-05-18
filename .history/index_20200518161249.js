// Your code here
/*

  index.js
    defines saturdayFun function declaration as specified
      1) function exists
      2) uses the default activity 'roller-skate' when no arguments are passed
      3) permits the default activity to be overriden
    defines mondayWork function expression as specified
      4) function exists
      5) uses the default activity 'go to the office' when no arguments are passed
      !6) permits the default activity to be overriden
    defines wrapAdjective function according to the specification
      7) function exists
      8) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
      9) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
    defines an object called Calculator
      10) has a JavaScript Object called Calculator as a local variable
      that has a function called add
        11) Calculator.add exists
        12) calculates 1 + 3
      that has a function called subtract
        13) Calculator.subtract exists
        14) calculates 1 - 3
      that has a function called multiply
        15) Calculator.multiply exists
        16) calculates 1 * 3
      that has a function called divide
        17) Calculator.divide exists
        18) calculates 10 / 5
    Defines a function called actionApplyer
      19) exists
      receives two arguments: a starting integer and an array of functions
        20) returns the given starting point, unchanged, when the array is empty
        21) Given 13, returns 4 after being acted on by several functions*/
        
        function saturdayFun(activity='roller-skate') {
            return `This Saturday, I want to ${activity}!`
        }
        
        let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}
        
        function wrapAdjective(adj){
        function midFunct (){

            let newFunc = function(){
                
            }
            return newFunct
        }
        }


        let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}