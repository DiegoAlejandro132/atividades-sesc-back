class Responsavel{
    constructor({ nome, matricula }) {
        this.NOME_RESPONSAVEL = nome;
        this.MATRICULA = matricula;
        this.DATA_CRIACAO = new Date().toISOString();
    }

    toJSON() {
        return {
            NOME_RESPONSAVEL: this.NOME_RESPONSAVEL,
            MATRICULA: this.MATRICULA,
            DATA_CRIACAO: this.DATA_CRIACAO
        };
    }
}

module.exports = Responsavel