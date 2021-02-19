function saturdayFun(arg1 = "roller-skate") {
  return `This Saturday, I want to ${arg1}!`
}

const mondayWork = function (arg1 = "go to the office") {
  return `This Monday, I will ${arg1}.`
}

function wrapAdjective(s = "*") {
  return function (arg = "special") {
    return (`You are ${s}${arg}${s}!`)
  }
}

 const Calculator = {
  add: function(n, m) {
    return 1 + 3;
  },

  subtract: function(n, m) {
    return 1 - 3
  },

  multiply: function(n, m) {
    return 1 * 3;
  },

  divide: function(n, m) {
    return 10 / 5;
  },


}

function actionApplyer(n, m) {
  if (m == []) {
    return n
  }
  else {
    let num;
    for (let i = 0; i < m.length; i++) {
     n = m[i](n)
    }
    return n
  }
}