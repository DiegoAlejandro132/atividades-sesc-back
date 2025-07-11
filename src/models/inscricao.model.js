class Inscricao {
    constructor({
        id_cliente,
        nome_cliente,
        id_atividade,
        nome_atividade,
        unidade_sesc
    }) {
        this.id_cliente = id_cliente;
        this.nome_cliente = nome_cliente;
        this.id_atividade = id_atividade;
        this.nome_atividade = nome_atividade;
        this.unidade_sesc = unidade_sesc;
        this.data_inscricao = new Date().toISOString();
    }

    toJSON() {
        return {
            id_cliente: this.id_cliente,
            nome_cliente: this.nome_cliente,
            id_atividade: this.id_atividade,
            nome_atividade: this.nome_atividade,
            unidade_sesc: this.unidade_sesc,
            data_inscricao: this.data_inscricao
        };
    }
}

module.exports = Inscricao;
