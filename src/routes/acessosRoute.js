const controller = require('../controllers/acessosController');
const express = require('express');
const router = express.Router();


router.post("/add", controller.addNewVisitor);  //adiciona um novo visitante
router.get("/all", controller.findAcessoByRG);  //traz todos os dados da base
router.delete("/:rg", controller.deleteAcesso); // apaga o primeiro visitante que achar pelo ID
router.put("/:id", controller.UpdateVisitor); // atualiza o cadastro do visitante 

module.exports = router;