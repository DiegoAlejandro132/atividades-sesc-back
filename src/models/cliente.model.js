class Cliente {
    constructor({
        nome_cliente,
        data_nascimento,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
        cep
    }) {
        this.nome_cliente = nome_cliente;
        this.data_nascimento = data_nascimento;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.data_criacao = new Date().toISOString();
    }

    toJSON() {
        return {
            nome_cliente: this.nome_cliente,
            data_nascimento: this.data_nascimento,
            logradouro: this.logradouro,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep,
            data_criacao: this.data_criacao
        };
    }
}

module.exports = Cliente;
