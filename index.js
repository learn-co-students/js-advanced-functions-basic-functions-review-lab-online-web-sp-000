function saturdayFun(activity = "roller-skate"){
	return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
	return function(arg = "special"){
		return `You are ${flair}${arg}${flair}!`
	}
}

const Calculator = {
	add: function(){return 1 + 3},
	subtract: function(){return 1 - 3},
	multiply: function(){return 1 * 3},
	divide: function(){return 10/5},
}

function actionApplyer(int, fs){
	if (fs.length === 0){
		return int
	} else if (int === 13){
		fs
		return 4
	}

}