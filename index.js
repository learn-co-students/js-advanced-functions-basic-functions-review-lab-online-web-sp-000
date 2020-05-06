// Your code here
function saturdayFun(activity="roller-skate") {
	return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
	return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair="*") {
	return function(quality="special") {
		return `You are ${flair}${quality}${flair}!`
	}
}

const Calculator = {
	add: function(x, y) {
		return x + y
	},
	subtract: function(x, y) {
		return x - y
	},
	multiply: function(x, y) {
		return x * y
	},
	divide: function(x, y) {
		return x / y
	}
}

function actionApplyer(int, func_array) {
	if (!func_array.length) {
		return int
	}
	else {
		for (let func of func_array) {
			int = func(int)
		}
		return int
	}
}