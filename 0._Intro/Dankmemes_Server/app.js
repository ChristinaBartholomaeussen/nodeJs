const express = require("express");
const app = express();
app.use(express.json());

const dankMemes = [
    {
        dank_meme_id: "1",
        dank_meme_title: "Any internet fact checkers?",
        dank_meme_link: "https://9gag.com/gag/aAbow3p"
    },
    {
        dank_meme_id: "2",
        dank_meme_title: "The secret ingredient is meth",
        dank_meme_link: "https://9gag.com/"
    },
    {
        dank_meme_id: "3",
        dank_meme_title: "When the Universe wants you to have a new PS5",
        dank_meme_link: "https://9gag.com/gag/a9E9Y46"
    }
];

// Returnerer det sidste id + 1 --> bruges til POST mapping
function returnLastID(){
    const lastID = dankMemes[dankMemes.length -1].dank_meme_id;
    return parseInt(lastID) +1;
}

// UPDATE mapping
app.put("/dankmemes/:id", (req, res) => {
    const { id } = req.params;
    const dankMeme = dankMemes.find(meme => meme.dank_meme_id == id);

    const title = req.body.dank_meme_title;
    const link = req.body.dank_meme_link;

    dankMeme.dank_meme_title = title;
    dankMemes.dank_meme_link = link;

    res.send({
        message : "element is now updated"
   });

})

// POST mapping
app.post("/dankmemes", (req, res) => {

    req.body.dank_meme_id = returnLastID();
    dankMemes.push(req.body);

    res.send({
         message : "element is now added"
    });
});


// DELETE mapping
app.delete("/dankmemes/:id", (req, res) => {
    
    const { id } = req.params;
    const meme = dankMemes.find(meme => meme.dank_meme_id == id);

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
    const meme = dankMemes.find(meme => meme.dank_meme_id == id);

    res.send({
        title: meme.dank_meme_title,
        link: meme.dank_meme_link
    });
});


app.listen(8080, (error) => {
    if (error) { 
        console.log("error id", error);
    }
    console.log("The server is running on port", 8080);
});