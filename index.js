

function saturdayFun(activity="roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork (x = "go to the office"){

  return `This Monday, I will ${x}.`
}



let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}


const Calculator = {

add: function(x,y){
  return x + y 
}
}
