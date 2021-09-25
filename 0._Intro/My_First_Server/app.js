//Importerer i node mode
//Dette fungerer ikke i browseren

const { query } = require("express"); //Hvorfor denne??????

//Her er den kun importeret
//const express = require("express");

//Her bliver den instantieret
//const app = express();

//Overstående på 1 linje
//const express = require("express")();
const express = require("express");
const app = express();
app.use(express.json());

//get metode med endpoint og callback funktion
//Callback funktion tager imod to parametre
//reg = request
//res = response
//Man kan sende data med get i query parameter og path variable
//Det smarte ved callback i denne sammenhæng er, at man kan have flere endpoints uden de bliver blokeret
app.get("/adventureTime", (req, res) => {
    res.send({
        adventure: "Time"
    });
});

// query parameter
app.get("/senddata", (req, res) => {

    //key=value&name=tobias&svar=Godt&nicenesslevel=10
    //console.log(req.query);
    res.send({
        svar: req.query.svar //svar er vores key og req.query.svar er vores value
    });
    
});

// request params / path viable
app.get("/favoriteNumber/:favoriteNumber", (req, res) => {
    
    res.send({
        number: req.params.favoriteNumber,
        nice: req.params.favoriteNumber < 5
    });
});


app.get("/frontpage", (req, res) => {
    res.send({
        message: "Welcome you"
    });
});

// . peger på fil, hvis der ikke er så leder den i node modules ligesom oppe i express
//require bruges også til at importere vores egne filer
    //const cake = require("./cake.json"); 
    //console.log(cake);
// nodemon --> run tool, der sørger for automatisk opdatering, 
// når man udvikler og der sker æændringer i filerne

// ----------------------------------------------------------------------------
//Nyttigt i forhold til lektier

 
app.use(express.json()); // --> derfor skal express opdeles i to

//Post
app.post("/messages", (req, res) => {
    
//normalt bør man ikke sende body retur
    res.send(
        req.body
    );
});






//lyt på en port - denne bør skrives i bunden så den er let at finde
app.listen(3000);

