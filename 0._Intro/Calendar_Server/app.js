const date = require('date-and-time');
const app = require("express")();

const now = new Date();
const timeNow = date.format(now, 'HH:mm');
const weekdayNow =  date.format(now, 'dddd');
const month = date.format(now, 'MMM');


//aber what
app.get("/monthofyear/:month", (res, req) => {


    res.send({
        month: req.params.month.month
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