const express = require("express");
const users = require("./users");
const example = require("./example");

const router = express.Router();

//Registrar cada "módulo"
//Exemplo
router.use("/hello", example);

//router.use("/users", users); se descomentar o codigo vai quebrar pq o arquivo precisa ser exportado em modulo = router

module.exports = router;

