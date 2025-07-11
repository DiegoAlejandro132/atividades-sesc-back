const inscricaoService = require("../services/inscricao.service")

exports.listar = async(req, res) => {
    try{
        const inscricoes = await inscricaoService.listar()
        res.json(inscricoes)
    }catch(erro){
        console.error("Erro ao listar inscrições: ", erro.message);
        res.status(500).json({ erro: "Erro ao listar inscrições" });
    }
}

exports.criar = async(req, res) => {
    try{
        const inscricaoNova = await inscricaoService.criar(req.body);
        res.json(inscricaoNova)
    }catch(erro){
        console.error("Erro ao criar inscrição: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar inscrição" });
    }
}

exports.alterar = async(req, res) => {
    res.json({"alterar": "inscricoes"})
}

exports.excluir = async(req, res) => {
    res.json({"excluir": "inscricoes"})
}