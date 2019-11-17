// Your code here
const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair="*") => {
  return (term = "special") => {
    return `You are ${flair}${term}${flair}!`
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

const actionApplyer = (i, arr) => {
  if (!arr.length) {
    return i;
  }
  for(var j in arr) {
    i = arr[j](i)
  }
  return i;
}