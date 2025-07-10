const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacao.controller');

router.get("/", avaliacaoController.listar);
router.post("/", avaliacaoController.criar);
router.put("/:id", avaliacaoController.alterar);
router.delete("/:id", avaliacaoController.excluir);

module.exports = router;