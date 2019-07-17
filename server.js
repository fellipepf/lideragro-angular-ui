const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

//server static files like images, js, ... (all inside dist folder)
app.use(express.static(__dirname + '/dist/lideragro-angular-ui'));

app.use(bodyParser.json());
app.use(cors());

app.all('*', function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
    response.header("Access-Control-Allow-Credentials", true);


    next();


    response.sendFile(path.join(__dirname + '/dist/lideragro-angular-ui/index.html'));
});

app.listen(process.env.PORT || 4200);