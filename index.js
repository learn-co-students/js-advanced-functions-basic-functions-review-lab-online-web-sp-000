// Your code here
function saturdayFun(stuff='roller-skate'){
    // console.log(`This Saturday, I wanto to ${stuff}!`)
    return `This Saturday, I want to ${stuff}!`;
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair='*'){
    return function (special='special'){
       return  `You are ${flair}${special}${flair}!`;
    }
}

const Calculator = {
    add: function (a, b){
        return a+b;
    },
    subtract: function (a, b){
        return a-b;
    },
    multiply: function (a, b){
        return a*b;
    },
    divide: function (a, b){
        return a/b;
    },

}

function actionApplyer(start, funk) {
    for (let i = 0; i < funk.length; i++){
        start = funk[i](start);
    }
    return start;
}
