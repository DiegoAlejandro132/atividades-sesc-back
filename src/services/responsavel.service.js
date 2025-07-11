const firebaseService = require('./firebase.service')
const Responsavel = require('../models/responsavel.model')
const caminho = "RESPONSAVEL"

exports.criar = async(dados) => {
    const responsavel = new Responsavel(dados)
    return await firebaseService.criar(caminho, responsavel.toJSON())
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

exports.buscraPorId = async(id) =>{
    return firebaseService.buscraPorId(caminho, id)
}