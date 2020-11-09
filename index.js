function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
	let inner = function (param = 'special') {
		return `You are ${flair}${param}${flair}!`
	}
	return inner
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}

// arrayOfTransforms = [
//   function(a){ return a * 2 },
//   function(a){ return a + 1000},
//   function(a){ return a % 7 }
// ]
// actionApplyer(13, arrayOfTransforms)