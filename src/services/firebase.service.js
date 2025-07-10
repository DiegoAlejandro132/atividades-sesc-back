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
