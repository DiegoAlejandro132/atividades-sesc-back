const firebaseService = require('./firebase.service')
const Atividade = require('../models/atividade.model')
const responsavelService = require("./responsavel.service")
const caminho = "ATIVIDADE"

exports.criar = async(dados, caminhoDb = caminho) => {
    const atividade = new Atividade(dados)
    return await firebaseService.criar(caminhoDb, atividade.toJSON())
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

exports.listarSemResponsavel = async() => {
    const atividades = await firebaseService.listar(caminho)
    return atividades.filter(item => item.responsavel == null)
}

exports.vicularResponsavel = async(dados) => {
    const responsavel   = await responsavelService.buscraPorId(dados.id_responsavel)
    const atividade     = await exports.buscraPorId(dados.id_atividade) 
    if (!atividade.responsavel){
        const objResponsavel = {
            id: responsavel.id,
            nome: responsavel.nome_responsavel,
            matricula: responsavel.matricula
        }
        return await firebaseService.criar(`${caminho}/${atividade.id}/responsavel`, objResponsavel, false)
    }else{
        throw new Error('Atividade já possui um responsável vinculado.');
    }
}

exports.desvicularResponsavel = async(id_atividade) => {
    await firebaseService.excluirPorCaminho(`${caminho}/${id_atividade}/responsavel`)
    return await exports.buscraPorId(id_atividade) 
}