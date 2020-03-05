// Your code here
const saturdayFun = (activity = 'roller-skate') => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (task = 'go to the office') => {
  return `This Monday, I will ${task}.`
}

const wrapAdjective = (style = '*') => {
  return (adjective = 'special') => {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: (a, b) => {
    return a + b
  },
  subtract: (a, b) => {
    return a - b
  },
  multiply: (a, b) => {
    return a * b
  },
  divide: (a, b) => {
    return a / b
  }
}


const actionApplyer = (start, arr) => {
  let a = start
  for (let i = 0; i < arr.length; i++) {
    a = arr[i](a)
  }
  return a
}
