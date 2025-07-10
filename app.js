const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Servidor está rodando. A porta é: "+ PORT);
    else 
        console.log("Houve um erro e o servidor não pôde iniciar", error);
    }
);