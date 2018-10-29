const express = require('express'),
    bodyParser = require('body-parser'),

    app = express(),
    store = {
        time: new Date(),
        timeSeconds: new Date().getTime(),
    };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/set-time', (req, res) => {
    store.time = new Date(req.body.date);
    store.timeSeconds = req.body.time;

    res.end('ok');
});

app.get('/get-time', (req, res) => {
    res.status(200).jsonp({date: store.time.getTime(), dateString: store.time + ""});
});

app.use(express.static('build'));

app.listen(2000, () => console.log("Server is starting on port 2000"));