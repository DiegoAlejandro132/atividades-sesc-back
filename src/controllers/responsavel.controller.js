const responsavelService = require('../services/responsavel.service');

exports.listar = async(req, res) => {
    res.json({"listar": "perfis"})
}

exports.criar = async(req, res) => {
    try{
        const responsavelNovo = await responsavelService.criar(req.body);
        res.json(responsavelNovo)
    }catch(error){
        console.error("Erro ao criar responsavel: ", error.message);
        res.status(500).json({ erro: "Erro ao criar responsável" });
    }
}

exports.alterar = async(req, res) => {
    res.json({"alterar": "perfis"})
}

exports.excluir = async(req, res) => {
    res.json({"excluir": "perfis"})
}