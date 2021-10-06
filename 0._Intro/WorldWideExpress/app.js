const express = require("express");
const app = express();
//app.use(express.json());

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html"); // __dirname + navnet på filen
    //res.sendFile("index.html", {root: __dirname});
    //res.sendFile(); // Optimale måde
});


app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo/cleo.html");
    //console.log("Miaw");
})


app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom/teenageroom.html");
})

//Serverside redirect -- clientside findes i html og js

app.get("/sausage/:money", (req, res) => {

    if(req.params.money <= 25) {
        return res.redirect("/creditor")
    } 

    res.send({
        massage: "it's' fine"
    });
    
    //res.send({sausage: "Indianer i svøb"});
    //res.redirect("/creditor")
});

app.get("/sausage", (req, res) => {

    if(Number(req.query.money < 25)) {
        res.redirect("/creditor");
    } else {
        res.send({sausage: "Indianer i svøb"})
    }
    
    //res.send({sausage: "Indianer i svøb"});
    //res.redirect("/creditor")
});

app.get("/creditor", (req, res) => {
    res.send({
        massage: "You owe me 25DKK"
    });

});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});

