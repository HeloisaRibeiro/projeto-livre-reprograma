const controller = require('../controllers/acessosController');
const express = require('express');
const router = express.Router();


router.post("/add", controller.addNewVisitor);  //adiciona um novo visitante
router.get("/:rg", controller.findAcessoByRG);  //pesquisa o visitante por rg
router.get("/:date", controller.findByDate);    // pesquisa por data de cadastro
router.delete("/:rg", controller.deleteAcesso);
router.put("/:id", controller.UpdateVisitor)

module.exports = router;