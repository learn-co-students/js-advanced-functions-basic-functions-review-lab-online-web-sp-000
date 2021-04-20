// Your code here
function saturdayFun(activity="roller-skate")
{return `This Saturday, I want to ${activity}!`}

 const mondayWork=function(activity="go to the office")
 {return `This Monday, I will ${activity}.`
}

const wrapAdjective =function(flair="*"){
  return function(adjective="special"){
    return `You are ${flair}${adjective}${flair}!`
  }
}

const Calculator = {
  add: function(a,b)
  {return a + b;},
  subtract: function(a,b)
    {return a - b},
  multiply: function(a,b)
    {return a * b},
  divide: function(a,b)
    {return a / b;}
}

const actionApplyer=function (number,array)
{let a=number
 for (let i=0;i<array.length;i++){
   a=array[i](a)
 }
 return a
 }
