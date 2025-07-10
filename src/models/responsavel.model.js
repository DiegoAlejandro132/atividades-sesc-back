class Responsavel{
    constructor({ nomeResponsavel, matricula }) {
        this.nomeResponsavel = nomeResponsavel;
        this.matricula = matricula;
        this.dataCriacao = new Date().toISOString();
    }

    toJSON() {
        return {
            nome_responsavel: this.nomeResponsavel,
            matricula: this.matricula,
            data_criacao: this.dataCriacao
        };
    }
}