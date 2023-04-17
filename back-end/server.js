const express = require('express')
const app = express()
const request = require('request');
const https = require('https')

app.get("/api", (req,res) => {
    res.json({"users" : ["userOne", "userTwo", "userThree", "usergour"]})
    // console.log("hi")

    request('https://restcountries.com/v3.1/name/ireland', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        
        body = body[0]
        console.log(body)
        console.log(body.population);
    });
})

app.listen(5000, () => console.log("Server started on port 5000"))