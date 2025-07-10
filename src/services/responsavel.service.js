const firebaseService = require('./firebase.service')
const Responsavel = require('../models/responsavel.model')
const caminho = "RESPONSVEL"

exports.criar = async(dados) => {
    const responsavel = new Responsavel(dados)
    return await firebaseService.criar(caminho, responsavel.toJSON())
}