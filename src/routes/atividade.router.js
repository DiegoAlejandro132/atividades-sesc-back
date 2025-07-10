const express = require('express');
const router = express.Router();
const atividadeController = require('../controllers/atividade.controller');

router.get("/", atividadeController.listar);
router.post("/", atividadeController.criar);
router.put("/:id", atividadeController.alterar);
router.delete("/:id", atividadeController.excluir);

module.exports = router;