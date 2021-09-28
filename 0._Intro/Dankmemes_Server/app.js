const express = require("express");
const app = express();

app.use(express.json());


//Løsning til ID

let AUTO_INCREMENT = 3;

let dankMemes = [
    {
        dankMemeID: 1,
        dankMemeTitle: "Any internet fact checkers?",
        dankMemeLink: "https://9gag.com/gag/aAbow3p"
    },
    {
        dankMemeID: 2,
        dankMemeTitle: "The secret ingredient is meth",
        dankMemeLink: "https://9gag.com/"
    },
    {
        dankMemeIDd: 3,
        dankMemeTitle: "When the Universe wants you to have a new PS5",
        dankMemeLink: "https://9gag.com/gag/a9E9Y46"
    }
];

// Returnerer det sidste id + 1 --> bruges til POST mapping
function returnLastID(){
    const lastID = dankMemes[dankMemes.length -1].dankMemeID;
    return parseInt(lastID) +1;
}


// PATCH mapping

 app.patch("/dankmemes/:id", (req, res) => {

    dankMemes = dankMemes.map(dankMeme => {
        if (dankMeme.dankMemeID === Number(req.params.id)) {
            
            return { ...dankMeme, ...req.body, dankMemeID: dankMeme.dankMemeID}

        }
        return dankMeme;
    })
    res.send()

}); 



// UPDATE mapping
app.put("/dankmemes/:id", (req, res) => {
    const dankMeme = dankMemes.find(meme => meme.dankMemeID === parseInt(req.params.id));

    const title = req.body.dankMemeTitle;
    const link = req.body.dankMemeLink;

    dankMeme.dankMemeTitle = title;
    dankMemes.dankMemeLink = link;

    res.send({
        message : "element is now updated"
   });

});

// POST mapping
app.post("/dankmemes", (req, res) => {

    req.body.dankMemeID = ++AUTO_INCREMENT;
    dankMemes.push(req.body);

    res.send({
         message : "element is now added"
    });
});


// DELETE mapping
app.delete("/dankmemes/:id", (req, res) => {
    
    const meme = dankMemes.findIndex(meme => meme.dankMemeID === parseInt(req.params.id));
    dankMemes.splice(meme, 1);

    console.log(dankMemes);

    res.send({
        message : "meme is deleted"
    });
});


// GET der returnerer alle memes
app.get("/dankmemes", (req, res) => {
    res.send ({
        memes: dankMemes
    })
});

// GET der returnerer et meme med specifik id
app.get("/dankmeme/:id", (req, res) => {
    
    const dankMeme = dankMemes.find(dankMeme => dankMeme.dankMemeID === parseInt(req.params.id));

    res.send({
        meme: dankMeme
    });
});


app.listen(8080, (error) => {
    if (error) { 
        console.log("error id", error);
    }
    console.log("The server is running on port", 8080);
});