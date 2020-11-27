// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(y = "*"){
    return function(x = "special"){
        return `You are ${y}${x}${y}!`
    }
}

let Calculator = {
    add: function (x,y){
        return x+y
    },

    subtract: function(x,y){
        return x-y
    },
    multiply: function(x,y){
        return x*y
    },
    divide: function(x,y){
        return x/y
    },
}

function actionApplyer(start, arrayOfTransforms){
    
        let a = start
        for (const f of arrayOfTransforms){
            a = f(a)
        }
        return a

    }
// let actionApplyer = function(start, ray) {
//     let a = start
  
//     for (let i = 0; i < ray.length; i++ ){
//       a = ray[i](a)
//     }
  
//     return a
//   }

