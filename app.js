const express = require('express')
const app = express()
const {port, host, jwtTokenKey} = require('./config/index')
const mainRouter = require('./routes/main')
const sequelize = require('./config/sequelize')
require('./config/db-init')(sequelize)

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));         //Поключение статических файлов
app.use(express.static(__dirname + '/node_modules'));

app.use('/', mainRouter);

app.listen(port, host, () => {
    console.log('Server has been started...');
});