// Your code here
//this is a commonest way to declare a function

function razzle(lawyer = "billy", target = "'em") {
    //content inside here
    console.log(`${lawyer} razzle-dazzles ${target}`)
};

razzle("azaelia banks", "frank ocean")

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};
//the name of the function, is a pointer
//whats a pointer. a name lol. it helps point to things. the name lets the machine know you're talking about that function

//how come u can call a function BEFORE defining that function?
//hoisting!!!!
//heres the kicker:
//For hoisting to work, the function must be defined using a function declaration.
//betcha didn't know
//function declaration, as opposed to:
//function expression, and possibly other things

//lets learn what a function expression is
//dont be intimidated.
//its simply called an expression mainly becuase when the engine reads that block of code,
// it returns a value
//compare that to a fucntion declaration, it reads that, it takes note, but doesn't return anything

//so that kinda explains its name
//and apparently thats the key thing about them
//they are not neccesarily nameless or one-time use... as we'll see later

//another thing to remember is
//if u define them out in the open, aka the global scope
// they must be wrapped by parenthesis
//why? cuz otherwise the engine think you're trying to write a function declration but you forgot a name
//the () kinda let it know, hey, that was intentional.
//fun fact: the () here works the same way it works in math. it says do me first.
//the () is a hungry powerbottom
//it says evaluate it as if its a value
//if u think about it, thats exactly what a ( ) in math does. surprising? yes. but true
 //(1 + 2) * 4 
 //vs
 // 1 + 2 * 4
// 1 + 2 would not have been seen as a value to be evaluated had it not been the ()'s presence.


(function() {
    console.log("Yet more razzling");
  })
  //this doesnt do anything. it is not called

  // to cal lit, u can add () to the end:
  //( function() { inside} )();
  //neeed the ;, otherwise mgiht affect stuff later
//this is an IIFE

  //now u can't help but wonder why would i want to do something like this
  //if i just use it one time, why dont i just, ya know, write the inner content
  //without the function() part if its not gonna be reused...
//apparently its about hiding things in there. keeping them private!
 
  //the other way to call a function expression is to first store it in a variable
  let x = function() { console.log(` đụ đĩ mẹ cả nhà`)};
  

  //this is called to define a function as a function expression
  //the right side of the = sign is a function expression
  //to call, u do x()
  //doing 'x' alone will return the definition of the function, not invoke it
  //important note: since this is tored in a variable, it is not hoisted
  //function declartions of the typical kind are hoisted
  //not this kind

  //note there is no wrapping around the parentehses anymore
  //i guess putting in a variable lets the engine know its an expression already?!
  //weird, cuz arrays and objects are not expressions even if they are put in varibles
  //but are they expression?





  (function() {
      console.log(`lòi lồz triến xỹ`)
  })


  //anonymous function
  //they are a kind of function expression
//they may or mayhave parenthese wrapping, depends in context
//what makes them anonymous is that they have no name
//if u put let x = in front of it,
 //i guess its no longer anonymous  
 
 //heres an anonymous function
  // function() { return "hi chao ca nha yeu"}
  //u ask, well, how is it gonna be used?
  //when would i use that
  //u do it ALL THE FREAKING TIME
  //when u addEventlistner("click", function(event) { console.log(event.target.value) })
//thats an anonymous function you're passing in there!!!!!!
//wowzuh
//they are one time use and yet theyre not. any click on the button will call them
//yet u cannot refer to this in other addEventlisteners...


let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

  //its also very common to a have a function return an anonmymous function/function expression
  //also functions in objects.... { add: function() {..}, name: "ice cream machine"}
  //the so called function factories that churn out customized functions



//bears repeating anonymous function and function expression are not exclusive cateogires
//when u invoke an anonymous function
//its called an IIFE
//what does the FE stand for?
//function expression!!!!
//do not try to remember one "look". they can take different forms.

//its not hard but easily confused
//need practice and refresh every now and then

//iife
//( function() { content} )();
//i basically write the fe part
//( function() { content} )
//note i got parentheses
//then i invoke
//by adding () at hte end


//btw, the variables inside the content of these iife's arenot accessible
//i'm not surprised, i just thought thats true for any function
//are there cases where thats not true?
//unless they mean you can't return anything from there...
//then thats special

//in regards to scope chain
//yes it works the same way
//no distinction between  function declarations nad func expressions or anonymous func



//lets practice reading these kinda nested functions, so were comfrotable
function outer(greeting, msg="It's a fine day to learn") {
    const innerFunction =  function(name, lang="Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    }
    return innerFunction;
  }
  
  // u invoke the function this way:
  outer ("heloooo", "it is a good day to learn the subject that is")("beyonce", "javascript");

  //syntax: outer(some args)(some other args)
  //the first part is evaluated outer(someargs) which returns the INNER FUNCTION EXPRESSION!
  //so it has become INNER FUNCTION EXPRESSION(some other args)
  //INNERFUNCTIONEXPRESSION(name, lang)

  //even th the inner function is returned, it still has access to greeting and msg
  //otherwise this would not work
  //thats called closure. beingable to access scope once u've left your parents' hands

//is everything inside an IIFE private?
//no
//u can return things

//if u return primitive data, it can be saved
let result = ( function(arg) { return `ta nó địt ${arg} zang động trời nam`} )("thúiiii");
//the right side of the = sign is an IIFE (not an fe, because theres an invokation)

//if u return say a function, it will have access to variables  from the outer scope chain
//thats closure


//lets exercise our bility to read these functions. its tricky yes. helps you hone so u dont run into bugss as much

const [answer, theBase] = (
    function(thingToAdd) {
      const base = 3;
      return [
        function() { return base + thingToAdd; },
        function() { return base; }
      ];
    }
  )(2)

  //here on the right side we have an IIFE!!!!
  //it sets up answer and theBase to receive the 2 functions that the IIFE
  //btw, u're not getting 3 and 5!
  //here
  //answer returns ƒ () { return base + thingToAdd; }
  //theBase returns ƒ () { return base; }

//you have to do
// answer() equals 5
// theBase() equals 3
//u get functions, not output of these functions
// to use them u have to call them
//the base variable and thingtoadd variable are hard coded, so to speak
// so u can't change them

function wrapAdjective(visualFlairString = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlairString}${adjective}${visualFlairString}!`
    }
  };



  //often times we dont even notice oh hey thats a fe, not a function declartion
  //we dont pay attention to when they are used
  //its very meta
  //start paying attention to get familiar
  //thats it. no special trick

  let Calculator = {
    add: function(num1, num2) { return num1 + num2 },
    subtract: function(num1, num2) { return num1 - num2 },
    multiply: function(num1, num2) { return num1 * num2 },
    divide: function(num1, num2) { return num1 / num2 }

  };

  function actionApplyer(startingInteger, arrayOfFunctions) {
      let currentResult = startingInteger; //crucial to initialize the variable OUTSIDE the loop/iteration. we dont want a fresh one for each iteration
      

      for (const func of arrayOfFunctions) {
          currentResult = func(currentResult);
      }
      return currentResult;
  }