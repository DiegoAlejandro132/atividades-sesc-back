const firebaseService = require('./firebase.service')
const Cliente = require('../models/cliente.model')
const caminho = "CLIENTE"

exports.criar = async(dados, caminhoDb = caminho) => {
    const cliente = new Cliente(dados)
    return await firebaseService.criar(caminhoDb, cliente.toJSON())
}

exports.buscarPorNome = async(dados) => {
    return await firebaseService.buscarPorNome(caminho, dados.nome)
}

exports.buscraPorId = async(id) =>{
    return firebaseService.buscraPorId(caminho, id)
}