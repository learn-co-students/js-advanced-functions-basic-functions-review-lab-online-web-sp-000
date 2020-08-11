function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
  }

  function mondayWork(activity="go to the office") {
      return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(visual="*") {
    return function(adjective="special") {
        return `You are ${visual}${adjective}${visual}!`
    }
}

let Calculator = { add: (a, b) => {
    return a + b;
    },
    subtract: (c, d) => {
        return c - d;
    },
    multiply: (e, f) => {
        return e * f;
    },
    divide: (p, q) => {
        return p / q;
    }
};

let actionApplyer = function(startingInteger, array) {
    let a = startingInteger
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
      // console.log(array[i])
    }  
    return a
}