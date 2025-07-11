const responsavelService = require('../services/responsavel.service');

exports.listar = async(req, res) => {
    try{
        res.json(await responsavelService.listar())
    }catch(erro){
        console.error("Erro ao listar responsaveis: ", erro.message);
        res.status(500).json({ erro: "Erro ao listar responsaveis: " + erro.message });
    }
}

exports.criar = async(req, res) => {
    try{
        res.json(await responsavelService.criar(req.body))
    }catch(erro){
        console.error("Erro ao criar responsavel: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar responsável: " + erro.message });
    }
}

exports.alterar = async(req, res) => {
    const id = req.params.id
    const dados = req.body
    try{
        const responsavelNovo = await responsavelService.alterar(id, dados)
        res.json(responsavelNovo)
    }catch(erro){
        console.error("Erro ao alterar responsavel: ", erro.message);
        res.status(500).json({ erro: "Erro ao alterar responsável" });
    }
}

exports.excluir = async(req, res) => {
    const id = req.params.id
    try{
        await responsavelService.excluir(id)
        res.send()
    }catch(erro){
        console.error("Erro ao excluir responsavel: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar responsável" });
    }
}