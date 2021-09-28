const express = require("express");
const app = express();
//app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // __dirname + navnet på filen
    //res.sendFile("index.html", {root: __dirname});
    //res.sendFile(); // Optimale måde
});


app.get("/cleo", (req, res) => {
    res.sendFile(__dirname + "/public/cleo.html");
    console.log("Miaw");
})



app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});