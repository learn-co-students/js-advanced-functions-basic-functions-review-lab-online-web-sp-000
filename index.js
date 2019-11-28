// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){
    return function(arg = "special") {
        
        return `You are ${flair}${arg}${flair}!`;

    }
}

class Calculator {

     add(n1,n2){
        return n1 + n2;
    } 

     subtract(n1,n2){
        return n1 - n2;
       } 

     multiply(n1,n2){
    return n1 * n2;
    } 

     divide(n1,n2){
    return n1 / n2;
    } 
}
Calculator = new Calculator();

//we want to iterate through the functions array, and call each one
// so we call foreach on the array. Element iterates through the array
//then element calls the function at that element's index
//then we pass the int value to the function on that index
function actionApplyer(int, arr){
 
    int == 0 ? int : arr.forEach( el =>{ int = el(int)}) 
    
    return int
    
      
}