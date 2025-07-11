const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

router.get("/", clienteController.listar);
router.post("/", clienteController.criar);
router.put("/:id", clienteController.alterar);
router.delete("/:id", clienteController.excluir);
router.post("/busca-por-nome", clienteController.buscarPorNome);


module.exports = router;