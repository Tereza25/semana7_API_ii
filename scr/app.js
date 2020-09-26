const express = require('express');
const app = express();

const index = require('./routes/index');
const empresas = require('./require/empresasTecRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');

    next();
});

app.use('/', index);
app.use('/empresas', empresas);

module.export = app;
