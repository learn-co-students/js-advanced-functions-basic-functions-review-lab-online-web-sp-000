// Your code here
function saturdayFun (activity = 'roller-skate' ) {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

 let wrapAdjective = function(flair="*") {
  return function(param="special"){
    return `You are ${flair}${param}${flair}!`
  }
}
