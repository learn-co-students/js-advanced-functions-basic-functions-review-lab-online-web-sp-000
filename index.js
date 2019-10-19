// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
    };
    
    function mondayWork(activity="go to the office"){
        return `This Monday, I will ${activity}.`
    };
    
    let wrapAdjective= function(style="*"){
        return function(adjective="special"){
            return `You are ${style}${adjective}${style}!`
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
    };
    
    function actionApplyer(starting_int, array_of_functions){
       
        array_of_functions.forEach(response => {
            starting_int = response(starting_int)
        });
        return starting_int
    }
    