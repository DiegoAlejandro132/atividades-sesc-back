class Responsavel{
    constructor({ nome_responsavel, matricula }) {
        this.nome_responsavel = nome_responsavel;
        this.matricula = matricula;
        this.data_criacao = new Date().toISOString();
    }

    toJSON() {
        return {
            nome_responsavel: this.nome_responsavel,
            matricula: this.matricula,
            data_criacao: this.data_criacao
        };
    }
}

module.exports = Responsavel;