

console.log("meow moew");

fetch("https://catfact.ninja/fact ")
.then(response => response.json())
.then(data => {
    const facts = document.getElementById("catfact");
    facts.innerText = data.fact;
   
});

