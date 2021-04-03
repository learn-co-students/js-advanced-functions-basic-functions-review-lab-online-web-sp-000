function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(flair="*") {
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3;
    },

    subtract: function() {
        return 1 - 3;
    },

    multiply: function() {
        return 1 * 3;
    },

    divide: function() {
        return 10 / 5;
    }
}

function actionApplyer(int, array) {
    let start = int;

    for (let i = 0; i < array.length; i++ ){
        start = array[i](start)
      }

    return start;
}