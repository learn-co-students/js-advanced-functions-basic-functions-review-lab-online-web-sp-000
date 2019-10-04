function saturdayFun (activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (action = "go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective (param = "*") {
    return function (adjective = "special") {
        return `You are ${param}${adjective}${param}!`
    }
}

const Calculator = {
    add: function(x, y) {
      return (x + y)
    },
    subtract: function(x, y) {
      return (x - y)
    },
    multiply: function(x, y) {
      return (x * y)
    },
    divide: function(x, y) {
      return (x / y)
    }
}

const actionApplyer = function (startInt, array) {
    let x = startInt
    for (let i = 0; i < array.length; i++) {
        x = array[i](x)
    }
    return x
}