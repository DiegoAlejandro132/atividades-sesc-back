const clienteService = require('../services/cliente.service')

exports.listar = async(req, res) => {
    res.json({"listar": "clientes"})
}

exports.alterar = async(req, res) => {
    res.json({"alterar": "clientes"})
}

exports.excluir = async(req, res) => {
    res.json({"excluir": "clientes"})
}

exports.criar = async(req, res) => {
    try{
        res.json(await clienteService.criar(req.body))
    }catch(erro){
        console.error("Erro ao criar cliente: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar cliente" });
    }
}

exports.buscarPorNome = async(req, res) =>{
    try{
        res.json(await clienteService.buscarPorNome(req.body))
    }catch(erro){
        console.error("Erro ao criar cliente: ", erro.message);
        res.status(500).json({ erro: "Erro ao criar cliente" });
    }
}