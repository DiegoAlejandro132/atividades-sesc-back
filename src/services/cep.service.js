const axios = require('axios')

exports.obterCep = async(cep) => {
    const cepLimpo = cep.replace(/\D/g, '');

    if (!/^[0-9]{8}$/.test(cepLimpo)) {
        throw new Error("CEP com formato inválido");
    }

    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const response = await axios.get(url);

    if (response.data.erro) {
        throw new Error("CEP não encontrado");
    }

    return response.data;
}