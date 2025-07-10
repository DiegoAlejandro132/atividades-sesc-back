const express = require('express');
const router = express.Router();
const inscricaoController = require('../controllers/inscricao.controller');

router.get("/", inscricaoController.listar);
router.post("/", inscricaoController.criar);
router.put("/:id", inscricaoController.alterar);
router.delete("/:id", inscricaoController.excluir);

module.exports = router;