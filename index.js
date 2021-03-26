// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    //console.log(`${date} ${activity}!`);
  }
  saturdayFun()

  //anonymous function
//const button = document.getElementById('button');
//button.addEventListener('click', function() {
//    console.log("Yet more razzling");
//  });

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(vflair= '*'){
    return function(adj="special"){
        return `You are ${vflair + adj  + vflair}!`
    }
}
const Calculator = {
    add: function(a,b){
        return a + b 
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b 
    }
}

function actionApplyer(integer, arry){
    if (arry.length === 0){
        return integer 
    }
    else {
        arry.forEach(f => {
            integer = f(integer)
        });
     return integer
    }
}