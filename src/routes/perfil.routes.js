const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfil.controller');

router.get("/", perfilController.listar);
router.post("/", perfilController.criar);
router.put("/:id", perfilController.alterar);
router.delete("/:id", perfilController.excluir);

module.exports = router;