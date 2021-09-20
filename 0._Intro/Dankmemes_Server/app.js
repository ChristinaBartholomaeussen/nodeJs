const app = require("express")();

// Oprettelse af objekter

const dank_memes = [];

const dank_mene01 = {
    dank_meme_id: 1,
    dank_meme_title: "Any internet fact checkers?",
    dank_meme_link: "https://9gag.com/gag/aAbow3p"
}

const dank_mene02 = {
    dank_meme_id: 2,
    dank_meme_title: "The secret ingredient is meth",
    dank_meme_link: "https://9gag.com/"
}

const dank_mene03 = {
    dank_meme_id: 3,
    dank_meme_title: "When the Universe wants you to have a new PS5",
    dank_meme_link: "https://9gag.com/gag/a9E9Y46"
}

dank_memes.push(dank_mene01, dank_mene02, dank_mene03);

function getDankmemeByID(id) {
    let meme;
    dank_memes.forEach(d => {
        if (d.dank_meme_id === id) {
            meme = d;
        }
    })
    return meme;
}


//Get der returnerer all memes
app.get("/dankmemes", (req, res) => {
    res.send ({
        dank_memes
    })
});

//Get der returnerer et meme med specifik id
app.get("/dankmeme/:id", (req, res) => {
    const meme = getDankmemeByID(parseInt(req.params.id));

    res.send({
        title: meme.dank_meme_title,
        link: meme.dank_meme_link
    });
});


app.listen(8080);