const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

//server static files like images, js, ... (all inside dist folder)
app.use(express.static(__dirname + '/dist/lideragro-angular-ui'));

app.use(cors());

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/lideragro-angular-ui/index.html'));
});

app.listen(process.env.PORT || 4200);