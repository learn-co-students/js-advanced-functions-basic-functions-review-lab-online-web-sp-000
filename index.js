//   Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(innerParam='special'){
        return `You are ${flair}${innerParam}${flair}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a /b;
    }
}

function actionApplyer(first, theArray){
    let a = first;

    for (let i=0; i < theArray.length; i++){
        a = theArray[i](a)
    }

    return a;
}