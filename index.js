function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    let part1 = 'You are'
      return function(message) { // Innermost
        return `${part1} ${flair}${message}${flair}!`;
      }
  }

let Calculator = {
    add: function(term1,term2) {
        return term1 + term2;
    },

    subtract: function(term1,term2) {
        return term1 - term2;
    },

    multiply: function(term1,term2) {
        return term1 * term2;
    },  
    
    divide: function(term1,term2) {
        return term1 / term2;
    }     
}

function actionApplyer(startInteger,functions) {
    if (functions.length === 0) {
        return startInteger
    }
    else {
        for (var i = 0; i < functions.length; i++) {
            startInteger = functions[i](startInteger);
            console.log(startInteger)
           }
        return startInteger;
    }
}
