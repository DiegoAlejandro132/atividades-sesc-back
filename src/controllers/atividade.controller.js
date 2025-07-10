const atividadeService = require('../services/atividade.service')

exports.listar = async(req, res) => {
    try{
        const listaAtividades = await atividadeService.listar()
        res.json(listaAtividades)
    }catch(erro){
        console.error("Erro ao listar atividades: ", erro.message);
        res.status(500).json({ erro: "Erro ao listar atividades" });
    }
}

exports.criar = async(req, res) => {
    try{
        res.json(await atividadeService.criar(req.body))
    }catch(erro){
        console.error("Erro ao criar atividade: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar atividade" });
    }
}

exports.alterar = async(req, res) => {
    const id = req.params.id
    const dados = req.body
    try{
        res.json(await atividadeService.alterar(id, dados))
    }catch(erro){
        console.error("Erro ao alterar atividade: ", erro.message);
        res.status(500).json({ erro: "Erro ao alterar atividade" });
    }
}

exports.excluir = async(req, res) => {
    const id = req.params.id
    try{
        await atividadeService.excluir(id)
        res.send()
    }catch(erro){
        console.error("Erro ao excluir atividade: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar atividade" });
    }
}