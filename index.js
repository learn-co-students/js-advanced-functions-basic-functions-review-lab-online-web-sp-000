// Your code here
function saturdayFun(activity="roller-skate"){
return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office"){
     return `This Monday, I will ${activity}.`
}

function wrapAdjective(outer="*"){
return function(inner="special"){
     return(`You are ${outer}${inner}${outer}!`)
}

}

const Calculator = {
     add: function(num1,num2) {
     return num1 + num2;
},
subtract: function(num1,num2) {
     return num1 - num2;
},
multiply: function(num1,num2) {
     return num1 * num2;
},
divide: function(num1,num2){
return num1 / num2
}
}

function actionApplyer(int, fun) {
     for (let i = 0; i < fun.length; i ++) {
          int = fun[i](int)
     }
     return int
}
