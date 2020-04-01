// saturdayFun()
    function saturdayFun(stuffToDo= 'roller-skate') {
        console.log(`This Saturday, I want to ${stuffToDo}!`);
        return (`This Saturday, I want to ${stuffToDo}!`);
    }

    saturdayFun();

// mondayWork()
    function mondayWork(stuffToDo = 'go to the office') {
        console.log(`This Monday, I will ${stuffToDo}.`);
        return (`This Monday, I will ${stuffToDo}.`);
    }

    mondayWork();

// wrapAdjective()
    function wrapAdjective(flair= "*") {
        return function (variable = "special") {
            return (`You are ${flair}${variable}${flair}!`)
         }
    }

    wrapAdjective();

// Calculator
    const Calculator = new Object();
    Calculator.add = function() {return 1 + 3;}
    Calculator.subtract = function() {return 1 - 3;}
    Calculator.multiply = function() {return 1 * 3;}
    Calculator.divide = function() { return 10 / 5;}

// actionApplyer
    function actionApplyer(startingInteger, array) {
        if (array === undefined || array.length === 0) {
            return startingInteger;
        } else {
           return array.reduce((previousResult, fn) => fn(previousResult), startingInteger);
        }
    }