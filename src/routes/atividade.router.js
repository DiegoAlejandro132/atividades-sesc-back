const express = require('express');
const router = express.Router();
const atividadeController = require('../controllers/atividade.controller');

router.get("/", atividadeController.listar);
router.post("/", atividadeController.criar);
router.put("/:id", atividadeController.alterar);
router.delete("/:id", atividadeController.excluir);
router.get("/sem-responsavel", atividadeController.atividadesSemResponsavel)
router.post("/vincular-responsavel", atividadeController.vicularResponsavel)
router.delete("/desvincular-responsavel/:id", atividadeController.desvincularResponsavel)

module.exports = router;