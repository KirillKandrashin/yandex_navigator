var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.sendFile('D:/3 курс/web/navigator_yandex/index.html');
});

app.listen(8089);

console.log('Сервер стартовал'); //"C:\Program Files\nodejs\node" server.js - в терминале
