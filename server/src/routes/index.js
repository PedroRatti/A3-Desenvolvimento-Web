const express = require("express");
const users = require("./users");
const example = require("./example");

const router = express.Router();

//Registrar cada "módulo"
//Exemplo
router.use("/hello", example);
router.use("/users", users);

module.exports = router;

