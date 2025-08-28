/* Imports ficticios do arquivo Repository */
const { findAllUsers, findUser, createUser, updateUser, deleteUser } = require("../repositories/userRepository")


async function listUsers(req, res) {
    const users = await findAllUsers();
    return res.json(users);
}

async function getUserById(req, res) {
    const id = req.params.id;
    const user = await findUser(id);
    //acredito que a validaçao de pra fazer na repository
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
}

async function createUser(req, res) {
    const payload = req.body;
    const created = await addUser(payload);
    return res.status(201).json(created);
}

async function updateUser(req, res) {
    const payload = req.body;
    const updated = await updateUser(payload);
    //validar se tem algum campo que existe alguma restricao, caso contrario
    return res.status(201).json(update);
}

async function deleteUser(req, res) {
    const payload = req.body;
    const deleted = await deleteUser(payload);
    //validar se o usuario pode ou nao ser deletado apenas na repository(caso tenha emprestimo ativo)
    return res.status(201).json(deleted)
}

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser };
