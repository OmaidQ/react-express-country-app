const express = require('express')
const app = express()
const request = require('request');
const https = require('https')

app.use(express.json());

app.post("/api", (req,res) => {
    const country = req.body.country;
    const url = `https://restcountries.com/v3.1/name/${country}`;
    request(url, { json: true }, (err, result, body) => {
        if (err) { return console.log(err); }
        data = body[0]
        res.json(data)
    });
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(5000, () => console.log("Server started on port 5000"))