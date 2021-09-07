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
    console.log(anyFunctionReference);
};

// call interact and pass anonymousFunctionGreeting as an argument

interact(); // --> printer undefined
interact(anonymousFunction); // --> printer funktionensreferencen

