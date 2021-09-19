//Importerer i node mode
//Dette fungerer ikke i browseren

const { query } = require("express"); //Hvorfor denne??????

//Her er den kun importeret
//const express = require("express");

//Her bliver den instantieret
//const app = express();

//Overstående på 1 linje
const app = require("express")();

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



//lyt på en port - denne bør skrives i bunden så den er let at finde
app.listen(3000);

