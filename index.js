// Your code here
function saturdayFun(activity='roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
};


let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
  }


function wrapAdjective(simb="*"){
    return function(im="special"){
        return`You are ${simb}${im}${simb}!`
  }
}

const Calculator = {
    add: function(x, y) {
      return x+y;
    },

    subtract: function(x, y) {
        return x-y;
    },

    multiply: function(x, y) {
        return x*y;
    },

    divide: function(x, y) {
        return x/y;
    }

}

function actionApplyer(start, fin) {
    for(let i = 0; i < fin.length; i++) {
        start = fin[i](start);
    }
return start;
}