// Your code here
function saturdayFun(first = "roller-skate"){
  return `This Saturday, I want to ${first}!`
}

let mondayWork = (first = "go to the office") => `This Monday, I will ${first}.`

function wrapAdjective(flair = "*"){
  return function (param = "special") {
    return `You are ${flair}${param}${flair}!`
  }
}

const Calculator = {
  add: () => {
    return 1 + 3
  },
  subtract: () => 1-3,
  multiply: () => 1 * 3,
  divide: () => 10 / 5
}

function actionApplyer(int, arrayOfFunctions){
  if (arrayOfFunctions.length === 0 ){
    return int
  } else {
    arrayOfFunctions.forEach(funct => {
      int = funct(int)
    })
    return int
  }
}
