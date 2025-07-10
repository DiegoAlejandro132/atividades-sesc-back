const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

router.get("/", dashboardController.listar);
router.post("/", dashboardController.criar);
router.put("/:id", dashboardController.alterar);
router.delete("/:id", dashboardController.excluir);

module.exports = router;