var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');
var errorhandler = require('errorhandler');
var notifier = require('node-notifier');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200
    })
);

const PORT = 4576;

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler({ log: errorNotification }))
}

function errorNotification(err, str, req) {
    var title = 'Error in ' + req.method + ' ' + req.url;

    notifier.notify({
        title: title,
        message: str
    });
}

app.get('/get-cars', async (req, res) => {
    const { cars } = req.query

    try {
        let response = await axios.get(`https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${cars}`)
        res.status(200).json(response.data)
    } catch (ex) {
        console.error(ex.message)
        res.status(404).send('Please try it another time')
    }
});

app.listen(PORT, () => console.log(`Proxy server listening on PORT ${PORT}!`));
