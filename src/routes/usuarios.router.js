const { getAll, create, getOne, remove, upDate} = require('../controller/usuarios.controller');
const express = require('express');

const usuarioRouter = express.Router();

usuarioRouter.route("/users")
		.get(getAll)
		.post(create);


usuarioRouter.route("/users/:id")
        .get(getOne)
		.delete(remove)
		.put(upDate);

module.exports = usuarioRouter;