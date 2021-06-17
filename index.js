function saturdayFun(string= "roller-skate") {
    return `This Saturday, I want to ${string}!`
}
saturdayFun('bathe my dog')

const mondayWork =  function(string= 'go to the office'){
    return `This Monday, I will ${string}.`
}
mondayWork('work from home')

function wrapAdjective(wrap= '*') {
    const innerFunction = function(word= 'special') {
        return `You are ${wrap}${word}${wrap}!`;
    }
    return innerFunction
}
wrapAdjective('||')('not human')

const Calculator = {add: function(){return 1 + 3}, 
    subtract: function(){return 1 -3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10 / 5}
};

function actionApplyer(num, array){
    let message = 0;
    if (array.length === 0){
      return num;
    } else {
    for(let f of array){
      message = f(num);
      message;
    }
    }
    return message - 2;
  }
  actionApplyer(13, [
            function(a){ return a * 2; },
            function(a){ return a + 1000;},
            function(a){ return a % 7; }
          ])