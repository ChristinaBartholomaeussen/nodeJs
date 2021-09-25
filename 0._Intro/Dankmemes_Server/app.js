const express = require("express");
const app = express();
app.use(express.json());

const dankMemes = [
    {
        dankMemeID: "1",
        dankMemeTitle: "Any internet fact checkers?",
        dankMemeLink: "https://9gag.com/gag/aAbow3p"
    },
    {
        dankMemeID: "2",
        dankMemeTitle: "The secret ingredient is meth",
        dankMemeLink: "https://9gag.com/"
    },
    {
        dankMemeIDd: "3",
        dankMemeTitle: "When the Universe wants you to have a new PS5",
        dankMemeLink: "https://9gag.com/gag/a9E9Y46"
    }
];

// Returnerer det sidste id + 1 --> bruges til POST mapping
function returnLastID(){
    const lastID = dankMemes[dankMemes.length -1].dankMemeID;
    return parseInt(lastID) +1;
}

// UPDATE mapping
app.put("/dankmemes/:id", (req, res) => {
    const { id } = req.params;
    const dankMeme = dankMemes.find(meme => meme.dankMemeID == id);

    const title = req.body.dankMemeTitle;
    const link = req.body.dankMemeLink;

    dankMeme.dankMemeTitle = title;
    dankMemes.dankMemeLink = link;

    res.send({
        message : "element is now updated"
   });

})

// POST mapping
app.post("/dankmemes", (req, res) => {

    req.body.dankMemeID = returnLastID();
    dankMemes.push(req.body);

    res.send({
         message : "element is now added"
    });
});


// DELETE mapping
app.delete("/dankmemes/:id", (req, res) => {
    
    const { id } = req.params;
    const meme = dankMemes.find(meme => meme.dankMemeID == id);

    const indexOfMeme = dankMemes.indexOf(meme);
    dankMemes.splice(indexOfMeme, 1);

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
    const { id } = req.params;
    const meme = dankMemes.find(meme => meme.dankMemeID == id);

    res.send({
        title: meme.dankMemeTitle,
        link: meme.dankMemeLink
    });
});


app.listen(8080, (error) => {
    if (error) { 
        console.log("error id", error);
    }
    console.log("The server is running on port", 8080);
});