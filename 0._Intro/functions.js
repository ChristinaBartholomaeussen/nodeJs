// create a function that is called greetings and prints out "Hello World";

// funktioner bliver hoisting --> man kan derfor godt kalde den før den bliver erklæret
// hele js filen bliver loadet på samme tid

// I js er der anonyme funktioner, hvilket er funktioner uden et navn, hvilket mindsker støj
// funktioner er variabler i js

greetings();
function greetings() {
    console.log("Hello world");
}

// Dette bliver et statement nu
// Værdien af variablen er en funktion
const newGreetings = function greetingsTwo() {
    console.log("Hello World");
    return { name: "Christina" };
};

console.log(newGreetings().name);

//I js er der anonyme funktioner, hvilket er funktioner uden et navn
const anonymousFunction = function() {
    console.log("Hello you a");
}

//funktions reference
console.log(anonymousFunction);


// Create a function that is called inteact. Its body is empty

function interact(anyFunctionReference) {

    //En funktion, der kalder en anden funktion
    // Why callbacks? It allows the function run with the default code
    // and ehat it's ready it calls OUR function that we give to it
    // imagine that before naxt line some code is running here...
    anyFunctionReference();
    
};

// call interact and pass anonymousFunctionGreeting as an argument

//interact(); // --> printer undefined
interact(anonymousFunction); // --> printer funktions referencen


//eks. 1
function poke() {
    console.log("Heeloooo");
};

interact(poke);

// eks 2 med anonym funktion
interact(function () {
    console.log("Heeloooo");
}); // --> dette er en callback funktion, da interact kalder poke


// eks. 3 med lambda
interact(() => console.log("kick"));

//Generisk funktion
function interactWithSomeone(anyFunctionReference, name){
    anyFunctionReference(name);
}

//I Runtime defineres der, hvem der bliver interageret med



function callBackLater(name){
   console.log(`Hi, ${name}. I'm ready to help you.`)
}

const callBackLater1 = (name) => console.log(`Hi, ${name}. I'm ready to help you.`);

//interactWithSomeone(callBackLater, "Martin");
//interactWithSomeone(callBackLater1, "Christina");

const helpWithSomethingLater = (name) => console.log(`Hi ${name} I will help you later`);

interactWithSomeone(helpWithSomethingLater, "Christina");