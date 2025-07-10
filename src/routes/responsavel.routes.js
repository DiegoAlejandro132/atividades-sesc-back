const express = require('express');
const router = express.Router();
const responsavelController = require('../controllers/responsavel.controller');

router.get("/", responsavelController.listar);
router.post("/", responsavelController.criar);
router.put("/:id", responsavelController.alterar);
router.delete("/:id", responsavelController.excluir);

module.exports = router;