const firebaseService = require('./firebase.service')
const Responsavel = require('../models/responsavel.model')
const caminho = "RESPONSAVEL"

exports.criar = async(dados) => {
    if (!dados.nome_responsavel || typeof dados.nome_responsavel !== 'string') {
        throw new Error('O campo nome responsavel é obrigatório', 400);
    }
    if (!dados.matricula || typeof dados.matricula !== 'string') {
        throw new Error('O campo matrícula é obrigatória', 400);
    }
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