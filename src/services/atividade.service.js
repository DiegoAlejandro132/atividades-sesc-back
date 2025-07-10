const firebaseService = require('./firebase.service')
const Atividade = require('../models/atividade.model')
const caminho = "ATIVIDADE"

exports.criar = async(dados) => {
    const atividade = new Atividade(dados)
    return await firebaseService.criar(caminho, atividade.toJSON())
}

exports.listar = async() => {
    return firebaseService.listar(caminho)
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