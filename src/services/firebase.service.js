const admin = require('firebase-admin');
const serviceAccount = require('../../config-firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projeto-sesc-53905-default-rtdb.firebaseio.com/"
});

const db = admin.database();

exports.criar = async(caminho, objeto) => {
    try{
        const ref = db.ref(caminho).push()
        await ref.set(objeto);
        return { id: ref.key, ...objeto };
    }catch(error){
        console.error("erro ao criar objeto no firebase: ", error.message);
        throw new Error("Erro ao criar objeto no Firebase");
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
