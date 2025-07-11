const admin = require('firebase-admin');
const serviceAccount = require('../../config-firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projeto-sesc-53905-default-rtdb.firebaseio.com/"
});

const db = admin.database();

exports.criar = async(caminho, objeto, push = true) => {
    try {
        let ref;
        if (push) {
            ref = db.ref(caminho).push();
        } else {
            ref = db.ref(caminho);
        }
        await ref.set(objeto);
        return { id: push ? ref.key : null, ...objeto };
    } catch (error) {
        console.error("erro ao criar objeto no firebase: ", error.message);
        throw new Error("Erro ao criar objeto no banco de dados");
    }
}

exports.listar = async(caminho) => {
    try{
        const snapshot = await db.ref(caminho).once('value');
        const dados = snapshot.val();
        if (!dados) return [];

        return Object.entries(dados).map(([id, valor]) => ({ id, ...valor }));
    }catch(erro){
        console.error('Erro ao listar dados do Firebase:', erro.message);
        throw new Error('Erro ao listar dados do Firebase');
    }
}

exports.alterar = async(caminho, id, objeto) => {
    try{
        const ref = db.ref(`${caminho}/${id}`)
        await ref.update(objeto)
        return { id, ...objeto }
    }catch(erro){
        console.error('Erro ao alterar dados do Firebase:', erro.message);
        throw new Error('Erro ao alterar dados do Firebase');
    }
}

exports.excluir = async(caminho, id) => {
    try{
        const ref = db.ref(`${caminho}/${id}`)
        await ref.remove();
    }catch(erro){
        console.error('Erro ao excluir dados do Firebase:', erro.message);
        throw new Error('Erro ao excluir dados do Firebase');
    }
}

exports.excluirPorCaminho = async(caminho) => {
    try{
        const ref = db.ref(`${caminho}`)
        await ref.remove();
    }catch(erro){
        console.error('Erro ao excluir dados do Firebase:', erro.message);
        throw new Error('Erro ao excluir dados do Firebase');
    }
}

exports.buscraPorId = async(caminho, id) => {
    try {
        const ref = db.ref(`${caminho}/${id}`);
        const snapshot = await ref.once('value');

        if (!snapshot.exists()) {
            throw new Error(`${caminho} com ID '${id}' não encontrado.`);
        }

        return { id, ...snapshot.val() };
    } catch (error) {
        console.error(`Erro ao buscar objeto em ${caminho}/${id}:`, error);
        throw new Error('Falha ao buscar no Firebase');
    }
}

exports.buscarPorNome = async (caminho, nome) => {
    try {
        const ref = db.ref(caminho);
        const snapshot = await ref
            .orderByChild('nome_cliente')
            .equalTo(nome)
            .once('value');

        if (!snapshot.exists()) {
            return null;  // ou []
        }

        const resultados = [];
        snapshot.forEach(child => {
            resultados.push({ id: child.key, ...child.val() });
        });

        return resultados.length === 1 ? resultados[0] : resultados;

    } catch (error) {
        console.error(`Erro ao buscar por nome em ${caminho}:`, error);
        throw new Error('Falha ao buscar por nome no Firebase');
    }
}

exports.inscricaoExiste = async (idCliente, idAtividade) => {
    try {
        const ref = db.ref('INSCRICAO');
        const snapshot = await ref.once('value');
        var existe = false

        if (!snapshot.exists()) {
            return existe
        }

        const todasInscricoes = snapshot.val();

        for (const [id, inscricao] of Object.entries(todasInscricoes)) {
            if (
                inscricao.id_cliente === idCliente &&
                inscricao.id_atividade === idAtividade
            ) {
                existe = true
                return existe
            }
        }
        return existe
    } catch (erro) {
        console.error('Erro ao verificar inscrição:', erro);
        throw new Error('Erro na verificação da inscrição.');
    }
};

