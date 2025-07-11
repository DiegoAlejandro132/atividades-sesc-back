const express = require('express');

const app = express();
const PORT = 3001;
const cors = require('cors')
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

const responsavelRoutes = require('./src/routes/responsavel.routes');
const atividadeRoutes = require('./src/routes/atividade.router');
const inscricaoRoutes = require('./src/routes/inscricao.router');
const dashboardRoutes = require('./src/routes/dashboard.router');
const avaliacaoRoutes = require('./src/routes/avaliacao.router');

app.use('/responsavel', responsavelRoutes);
app.use('/atividade', atividadeRoutes);
app.use('/inscricao', inscricaoRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/avaliacao', avaliacaoRoutes);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Servidor está rodando. A porta é: "+ PORT);
    else 
        console.error("Houve um erro e o servidor não pôde iniciar", error);
    }
);