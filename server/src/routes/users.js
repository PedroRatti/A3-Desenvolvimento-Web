const { Router } = require("express");

/* 
    Imports ficticios para as funções que criaremos
*/
const { listUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/users");

const router = Router();

/**
   Rotas fictícias de "users"
   GET /api/users          -> lista usuários
   GET /api/users/:id      -> busca um usuário por id
   POST /api/users         -> cria um usuário
 */

router.get("/", listUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/", updateUser);
router.put("/", deleteUser); /* podemos utilizar uma coluna "is_available" sendo booleana para definir user ativo ou deletado */

module.exports = router;