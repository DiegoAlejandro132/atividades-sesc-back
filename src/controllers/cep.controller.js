const cepService = require('../services/cep.service')

exports.obterCep = async(req, res) => {
    try{
        res.send(await cepService.obterCep(req.params.cep))
    }catch(erro){
        console.error("Erro ao consultar cep: ", erro.message);
        res.status(500).json({ erro: "Erro ao consultar cep" });
    }
}