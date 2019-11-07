// Your code here
let saturdayFun = ( activity = 'roller-skate' ) => {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = ( activity = 'go to the office' ) => {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = ( flair = '*' ) => {
  return ( adj = "special" ) => `You are ${flair}${adj}${flair}!`
}

let Calculator = {
  add: () => 1 + 3,
  subtract: () => 1 - 3,
  multiply: () => 1 * 3,
  divide: () => 10 / 5
}

let actionApplyer = ( int, array ) => {
  for ( let fun of array ) {
    int = fun( int )
  }
  return int
}
