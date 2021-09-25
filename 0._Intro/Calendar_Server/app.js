const date = require('date-and-time');
const express = require("express");
const app = express();

const now = new Date();

const timeNow = date.format(now, 'HH:mm');
const weekdayNow =  date.format(now, 'dddd');

//Overvej array med dage og at lægge tiden ind i get metoderne 

function returnMonth(month){

    month = date.format(now, 'MMM');

    return month;
}

app.get("/monthofyear/:month", (req, res) => {

    res.send({
        month: returnMonth(req.params.month)
    });

});

app.get("/weekday", (req, res) =>{

    res.send({
        dayOfTheWeek: weekdayNow
    })

})

app.get("/time", (req, res) => {

    res.send({
        time: timeNow
    })
})





app.listen(8080);