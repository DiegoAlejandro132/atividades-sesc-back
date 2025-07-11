class Atividade{
    constructor({ nome_atividade, descricao, unidade_sesc }) {
        this.nome_atividade = nome_atividade;
        this.descricao = descricao;
        this.unidade_sesc = unidade_sesc;
        this.data_criacao = new Date().toISOString();
    }

    toJSON() {
        return {
            nome_atividade: this.nome_atividade,
            descricao: this.descricao,
            unidade_sesc: this.unidade_sesc,
            data_criacao: this.data_criacao
        };
    }
}

module.exports = Atividade;