function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (flair='*'){
  return function(name='special'){
    return `You are ${flair}${name}${flair}!`
  }
}

let Calculator = {
  add: function(){
    return 1+3
  },
  subtract: function(){
    return 1-3
  },
  multiply: function(){
    return 1*3
  },
  divide: function(){
    return 10/5
  }
};

function actionApplyer(number, arrayOfTransforms){
      var digit1;
      var digit2;
      var digit3;

  if (arrayOfTransforms.length === 0){
    return number
  } else {

     arrayOfTransforms.forEach(element =>
        number = element(number))
        return number

/*
      digit1 = arrayOfTransforms[0](number)
      digit2 = arrayOfTransforms[1](digit1)
      digit3 = arrayOfTransforms[2](digit2)
      return digit3


for(let i = 0; i< arr.length; i++) {

    int = arr[i](int)
}
return int
*/
  }
}
