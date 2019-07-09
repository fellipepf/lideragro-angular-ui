const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

//server static files like images, js, ... (all inside dist folder)
app.use(express.static(__dirname + '/dist/lideragro-angular-ui'));

var resolveCrossDomain = function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", true);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(resolveCrossDomain);

app.use(cors());

app.get('/*', function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.header("Access-Control-Allow-Credentials", true);

    if ('OPTIONS' == request.method) {
        response.send(200);
    }
    else {
        next();
    }


    response.sendFile(path.join(__dirname + '/dist/lideragro-angular-ui/index.html'));
});

app.listen(process.env.PORT || 4200);