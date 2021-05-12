// Your code here

function saturdayFun(activity="roller-skate") { 
return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") { 
return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") { 
    return function(phrase="special") {
        return `You are ${flair}${phrase}${flair}!`
    }
}

let Calculator = {
    add: function (a, b) { 
        return a + b;
        },

    subtract: function (a, b) { 
        return a - b;
    }, 

    multiply: function (a, b) { 
        return a * b;
    },

    divide: function (a, b) { 
        return a / b; 
    }
};

function actionApplyer(integer, array) { 
    if (array.length != 0) {
let firstFunction = array[0](integer); 
let secondFunction = array[1](firstFunction);
let thirdFunction = array[2](secondFunction);
return thirdFunction;
    }
    else {
    return integer;
}

}

