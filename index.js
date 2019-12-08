function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}

var mondayWork = function(activity='go to the office'){
  return `This Monday, I will ${activity}.`;
};

var wrapAdjective = function(boopity='*'){
  return function(boop='special'){
    return `You are ${boopity}${boop}${boopity}!`;
  };
};

var Calculator={
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b
};

var actionApplyer = function(start, ray){
  let boo = start;
  for (let i=0; i<ray.length; i++){
    boo=ray[i](boo);
  }
  return boo;
};
  