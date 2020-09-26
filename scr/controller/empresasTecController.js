const empresas = require("../model/empresasTec.json");

const getAll = (req, res) => {
    console.log(req.url);

    res.send(empresas);    
};

module.exports = { getAll };
