const filmes = require("../model/filmes.json");

const getAll = (req, res) => {
    console.log(req.url);

    res.send(filmes);    
};

module.exports = { getAll };