// Your code here
const saturdayFun = (activity = 'roller-skate') => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (sym = '*') => {
  return (x = 'special') => {
    return `You are ${sym}${x}${sym}!`
  }
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

const actionApplyer = (int, arr) => {
  let solution = int
  for (let i = 0; i < arr.length; i++) {
    solution = arr[i](solution)
    console.log(solution)
  }
  return solution
}

arrayOfTransforms = [
  function (a) {
    return a * 2
  },
  function (a) {
    return a + 1000
  },
  function (a) {
    return a % 7
  }
]

actionApplyer(4, arrayOfTransforms)
