const express = require('express');
const usuarioRouter = require('./usuarios.router');
const router = express.Router();


// colocar las rutas aquí
router.use(usuarioRouter);


module.exports = router;