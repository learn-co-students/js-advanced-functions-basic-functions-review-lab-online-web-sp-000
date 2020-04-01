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
        let innerFunction = function (variable = "special") {
            return (`You are ${flair}${variable}${flair}!`)
         }
        return innerFunction
    }

    wrapAdjective();

// Calculator
    const Calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        }
    }

// actionApplyer
    function actionApplyer(start, array) {
        let a = start

        for (let i = 0; i < array.length; i++) {
            a = array[i](a)
        }
        return a
    }