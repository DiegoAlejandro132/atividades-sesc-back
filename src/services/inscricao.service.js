const firebaseService = require('./firebase.service')
const atividadeService = require('./atividade.service')
const clienteService = require('./cliente.service')
const Inscricao = require('../models/inscricao.model')
const caminho = "INSCRICAO"

exports.criar = async(dados, caminhoDb = caminho) => {
    const inscricaoExistente = await firebaseService.inscricaoExiste(dados.id_cliente, dados.id_atividade)
    if (!inscricaoExistente){ 
        const atividade = await atividadeService.buscraPorId(dados.id_atividade)
        const cliente   = await clienteService.buscraPorId(dados.id_cliente)
        dadosInscricao = {
            id_cliente: cliente.id,
            nome_cliente: cliente.nome_cliente,
            id_atividade: atividade.id,
            nome_atividade: atividade.nome_atividade,
            unidade_sesc: atividade.unidade_sesc
        }
        const inscricao = new Inscricao(dadosInscricao)
        return await firebaseService.criar(caminhoDb, inscricao.toJSON())
    }
    return {existe: true}
}

exports.listar = async() => {
    return await firebaseService.listar(caminho)
}

exports.alterar = async(id, dados) => {
    const existente = await firebaseService.buscraPorId(caminho, id)
    delete dados.id
    delete existente.id
    const novo = {
        ...existente,
        ...dados
    }
    return await firebaseService.alterar(caminho, id, novo)
}

exports.excluir = async(id) => {
    await firebaseService.excluir(caminho, id)
}

exports.buscraPorId = async(id) =>{
    return firebaseService.buscraPorId(caminho, id)
}